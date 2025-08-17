const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs').promises;

let mainWindow;
let websiteRoot = '';

// Load config on startup
async function loadConfig() {
  try {
    const configPath = path.join(__dirname, '../app/config.json');
    const configData = await fs.readFile(configPath, 'utf8');
    const config = JSON.parse(configData);
    websiteRoot = config.websiteRoot || '';
  } catch (error) {
    console.log('No config found, will prompt for website root');
  }
}

// Save config
async function saveConfig() {
  const configPath = path.join(__dirname, '../app/config.json');
  const config = { websiteRoot };
  await fs.writeFile(configPath, JSON.stringify(config, null, 2));
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    title: 'Portfolio Editor'
  });

  mainWindow.loadFile(path.join(__dirname, '../app/index.html'));

  if (process.argv.includes('--dev')) {
    mainWindow.webContents.openDevTools();
  }
}

app.whenReady().then(async () => {
  await loadConfig();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// IPC Handlers
ipcMain.handle('get-website-root', () => websiteRoot);

ipcMain.handle('set-website-root', async (event, newRoot) => {
  console.log('Main process: set-website-root called with:', newRoot);
  websiteRoot = newRoot;
  await saveConfig();
  console.log('Main process: website root set to:', websiteRoot);
  return true;
});

ipcMain.handle('select-website-root', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory'],
    title: 'Select Website Root Directory'
  });
  
  if (!result.canceled && result.filePaths.length > 0) {
    websiteRoot = result.filePaths[0];
    await saveConfig();
    return websiteRoot;
  }
  return null;
});

ipcMain.handle('scan-projects', async () => {
  console.log('Main process: scan-projects called, websiteRoot:', websiteRoot);
  if (!websiteRoot) {
    console.log('Main process: No website root set, returning empty array');
    return [];
  }
  
  try {
    const projectsPath = path.join(websiteRoot, 'projects');
    console.log('Main process: Scanning projects path:', projectsPath);
    const projects = await fs.readdir(projectsPath);
    
    const projectList = [];
    for (const project of projects) {
      const projectPath = path.join(projectsPath, project);
      const stat = await fs.stat(projectPath);
      
      if (stat.isDirectory()) {
        const indexPath = path.join(projectPath, 'index.html');
        try {
          await fs.access(indexPath);
          projectList.push({
            slug: project,
            path: indexPath
          });
        } catch (error) {
          // No index.html in this project
        }
      }
    }
    
    return projectList;
  } catch (error) {
    console.error('Error scanning projects:', error);
    return [];
  }
});

ipcMain.handle('load-page', async (event, pagePath) => {
  try {
    const content = await fs.readFile(pagePath, 'utf8');
    return content;
  } catch (error) {
    throw new Error(`Failed to load page: ${error.message}`);
  }
});

ipcMain.handle('save-page', async (event, pagePath, content) => {
  try {
    // Validate path is within website root
    const resolvedPath = path.resolve(pagePath);
    const resolvedRoot = path.resolve(websiteRoot);
    
    if (!resolvedPath.startsWith(resolvedRoot)) {
      throw new Error('Path outside website root');
    }
    
    await fs.writeFile(pagePath, content, 'utf8');
    return true;
  } catch (error) {
    throw new Error(`Failed to save page: ${error.message}`);
  }
});

ipcMain.handle('list-images', async (event, projectSlug) => {
  if (!websiteRoot) return [];
  
  try {
    const imagesPath = path.join(websiteRoot, 'projects', projectSlug, 'images');
    const files = await fs.readdir(imagesPath);
    
    const imageFiles = [];
    for (const file of files) {
      const filePath = path.join(imagesPath, file);
      const stat = await fs.stat(filePath);
      
      if (stat.isFile()) {
        const ext = path.extname(file).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)) {
          imageFiles.push({
            name: file,
            path: filePath,
            size: stat.size
          });
        }
      }
    }
    
    return imageFiles;
  } catch (error) {
    console.error('Error listing images:', error);
    return [];
  }
});

ipcMain.handle('get-image-info', async (event, imagePath) => {
  try {
    const stat = await fs.stat(imagePath);
    return {
      size: stat.size,
      modified: stat.mtime
    };
  } catch (error) {
    throw new Error(`Failed to get image info: ${error.message}`);
  }
});
