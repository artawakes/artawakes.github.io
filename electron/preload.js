const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // Website root management
  getWebsiteRoot: () => ipcRenderer.invoke('get-website-root'),
  setWebsiteRoot: (root) => ipcRenderer.invoke('set-website-root', root),
  selectWebsiteRoot: () => ipcRenderer.invoke('select-website-root'),
  
  // Project management
  scanProjects: () => ipcRenderer.invoke('scan-projects'),
  
  // Page operations
  loadPage: (path) => ipcRenderer.invoke('load-page', path),
  savePage: (path, content) => ipcRenderer.invoke('save-page', path, content),
  
  // Image operations
  listImages: (projectSlug) => ipcRenderer.invoke('list-images', projectSlug),
  getImageInfo: (imagePath) => ipcRenderer.invoke('get-image-info', imagePath)
});
