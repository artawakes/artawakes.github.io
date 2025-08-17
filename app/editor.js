/**
 * Portfolio Editor - Visual Editor
 */

class PortfolioEditor {
    constructor() {
        console.log('PortfolioEditor constructor called - JavaScript is running!');
        this.currentProject = null;
        this.currentPagePath = null;
        this.originalHtml = '';
        this.history = [];
        this.historyIndex = -1;
        this.saveTimeout = null;
        this.serializer = new DOMSerializer();
        
        this.initializeElements();
        this.bindEvents();
        this.loadWebsiteRoot();
        this.scanProjects();
    }

    initializeElements() {
        // Header elements
        this.websiteRootDisplay = document.getElementById('website-root-display');
        this.selectRootBtn = document.getElementById('select-root-btn');
        this.saveBtn = document.getElementById('save-btn');
        this.saveStatus = document.getElementById('save-status');
        
        // Sidebar elements
        this.projectsList = document.getElementById('projects-list');
        this.refreshProjectsBtn = document.getElementById('refresh-projects-btn');
        
        // Editor elements
        this.currentPageTitle = document.getElementById('current-page-title');
        this.editorContent = document.getElementById('editor-content');
        this.undoBtn = document.getElementById('undo-btn');
        this.redoBtn = document.getElementById('redo-btn');
        this.addParagraphBtn = document.getElementById('add-paragraph-btn');
        this.addImageBtn = document.getElementById('add-image-btn');
        
        // Modal elements
        this.imagePickerModal = document.getElementById('image-picker-modal');
        this.imageSettingsModal = document.getElementById('image-settings-modal');
        this.imageGrid = document.getElementById('image-grid');
        this.closeImagePicker = document.getElementById('close-image-picker');
        this.closeImageSettings = document.getElementById('close-image-settings');
        this.imageAlt = document.getElementById('image-alt');
        this.imageSize = document.getElementById('image-size');
        this.customWidthGroup = document.getElementById('custom-width-group');
        this.imageWidth = document.getElementById('image-width');
        this.applyImageSettings = document.getElementById('apply-image-settings');
        this.cancelImageSettings = document.getElementById('cancel-image-settings');
        
        this.currentImageElement = null;
    }

    bindEvents() {
        // Header events
        this.selectRootBtn.addEventListener('click', () => this.selectWebsiteRoot());
        this.saveBtn.addEventListener('click', () => this.savePage());
        
        // Sidebar events
        this.refreshProjectsBtn.addEventListener('click', () => this.scanProjects());
        
        // Editor events
        this.undoBtn.addEventListener('click', () => this.undo());
        this.redoBtn.addEventListener('click', () => this.redo());
        this.addParagraphBtn.addEventListener('click', () => this.addNewParagraph());
        this.addImageBtn.addEventListener('click', () => this.addNewImage());
        
        // Modal events
        this.closeImagePicker.addEventListener('click', () => this.hideImagePicker());
        this.closeImageSettings.addEventListener('click', () => this.hideImageSettings());
        this.applyImageSettings.addEventListener('click', () => this.applyImageSettingsHandler());
        this.cancelImageSettings.addEventListener('click', () => this.hideImageSettings());
        
        // Image size change
        this.imageSize.addEventListener('change', () => {
            if (this.imageSize.value === 'custom') {
                this.customWidthGroup.style.display = 'block';
            } else {
                this.customWidthGroup.style.display = 'none';
            }
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
        
        // Modal backdrop clicks
        this.imagePickerModal.addEventListener('click', (e) => {
            if (e.target === this.imagePickerModal) this.hideImagePicker();
        });
        this.imageSettingsModal.addEventListener('click', (e) => {
            if (e.target === this.imageSettingsModal) this.hideImageSettings();
        });
    }

    async loadWebsiteRoot() {
        try {
            const root = await window.electronAPI.getWebsiteRoot();
            this.updateWebsiteRootDisplay(root);
        } catch (error) {
            console.error('Failed to load website root:', error);
        }
    }

    updateWebsiteRootDisplay(root) {
        if (root) {
            this.websiteRootDisplay.textContent = root;
            this.websiteRootDisplay.style.color = '#4caf50';
        } else {
            this.websiteRootDisplay.textContent = 'Not set';
            this.websiteRootDisplay.style.color = '#666';
        }
    }

    async selectWebsiteRoot() {
        console.log('Select website root button clicked');
        
        // Test if Electron API is available
        if (!window.electronAPI) {
            console.error('Electron API not available!');
            alert('Electron API not available - this app needs to run in Electron');
            return;
        }
        
        console.log('Electron API methods:', Object.keys(window.electronAPI));
        
        // Hardcoded path to Newsite project
        const hardcodedRoot = '/Users/dev/Documents/Newsite';
        console.log('Using hardcoded path:', hardcodedRoot);
        
        try {
            // Set the website root directly
            console.log('Calling setWebsiteRoot...');
            await window.electronAPI.setWebsiteRoot(hardcodedRoot);
            console.log('setWebsiteRoot completed');
            
            this.updateWebsiteRootDisplay(hardcodedRoot);
            console.log('Display updated');
            
            await this.scanProjects();
            console.log('Successfully set hardcoded website root');
        } catch (error) {
            console.error('Failed to set hardcoded website root:', error);
            alert('Error: ' + error.message);
        }
    }

    async scanProjects() {
        try {
            console.log('Scanning projects...');
            const projects = await window.electronAPI.scanProjects();
            console.log('Projects found:', projects);
            this.renderProjectsList(projects);
        } catch (error) {
            console.error('Failed to scan projects:', error);
            alert('Error scanning projects: ' + error.message);
            this.renderProjectsList([]);
        }
    }

    renderProjectsList(projects) {
        this.projectsList.innerHTML = '';
        
        if (projects.length === 0) {
            this.projectsList.innerHTML = '<div class="no-projects">No projects found</div>';
            return;
        }
        
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project-item';
            projectElement.innerHTML = `
                <h3>${this.capitalizeFirst(project.slug)}</h3>
                <div class="project-slug">${project.slug}</div>
            `;
            
            projectElement.addEventListener('click', () => this.loadProject(project));
            this.projectsList.appendChild(projectElement);
        });
    }

    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');
    }

    async loadProject(project) {
        try {
            // Update UI
            document.querySelectorAll('.project-item').forEach(item => item.classList.remove('active'));
            event.target.closest('.project-item').classList.add('active');
            
            this.currentProject = project;
            this.currentPagePath = project.path;
            this.currentPageTitle.textContent = this.capitalizeFirst(project.slug);
            
            // Load page content
            const html = await window.electronAPI.loadPage(project.path);
            this.originalHtml = html;
            
            // Parse and render content
            this.renderPageContent(html);
            
            // Reset history
            this.history = [html];
            this.historyIndex = 0;
            this.updateUndoRedoButtons();
            
            // Enable save button
            this.saveBtn.disabled = false;
            
        } catch (error) {
            console.error('Failed to load project:', error);
            this.showError('Failed to load project');
        }
    }

    renderPageContent(html) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Find all p and img elements in the entire document
        const paragraphs = doc.querySelectorAll('p');
        const images = doc.querySelectorAll('img');
        
        if (paragraphs.length === 0 && images.length === 0) {
            this.editorContent.innerHTML = '<div class="no-page-selected"><p>No editable content found (no p or img tags)</p></div>';
            return;
        }
        
        // Convert content to editable blocks
        const blocks = [];
        
        // Add paragraph blocks
        paragraphs.forEach(p => {
            blocks.push(this.createParagraphBlock(p));
        });
        
        // Add image blocks
        images.forEach(img => {
            blocks.push(this.createImageBlock(img));
        });
        
        this.editorContent.innerHTML = '';
        
        blocks.forEach(block => {
            this.editorContent.appendChild(block);
        });
        
        // Add event listeners to editable elements
        this.addEditableListeners();
    }



    createParagraphBlock(pElement) {
        const block = document.createElement('div');
        block.className = 'content-block';
        
        const controls = document.createElement('div');
        controls.className = 'block-controls';
        controls.innerHTML = `
            <button title="Move Up" onclick="editor.moveBlock(this, 'up')">↑</button>
            <button title="Move Down" onclick="editor.moveBlock(this, 'down')">↓</button>
            <button title="Delete" onclick="editor.deleteBlock(this)" class="danger">×</button>
        `;
        
        const paragraph = document.createElement('p');
        paragraph.className = 'editable-paragraph';
        paragraph.contentEditable = true;
        paragraph.innerHTML = pElement.innerHTML;
        
        block.appendChild(controls);
        block.appendChild(paragraph);
        
        return block;
    }

    createImageBlock(imgElement) {
        const block = document.createElement('div');
        block.className = 'content-block';
        
        const controls = document.createElement('div');
        controls.className = 'block-controls';
        controls.innerHTML = `
            <button title="Move Up" onclick="editor.moveBlock(this, 'up')">↑</button>
            <button title="Move Down" onclick="editor.moveBlock(this, 'down')">↓</button>
            <button title="Change Image" onclick="editor.showImagePicker(this)">🖼️</button>
            <button title="Settings" onclick="editor.showImageSettings(this)">⚙️</button>
            <button title="Delete" onclick="editor.deleteBlock(this)" class="danger">×</button>
        `;
        
        const img = document.createElement('img');
        img.className = 'editor-image';
        img.src = imgElement.src;
        img.alt = imgElement.alt || '';
        
        // Apply size classes
        const size = this.getImageSize(imgElement);
        img.className = `editor-image image-size-${size}`;
        
        if (imgElement.style.width) {
            img.style.width = imgElement.style.width;
        }
        
        block.appendChild(controls);
        block.appendChild(img);
        
        return block;
    }

    getImageSize(imgElement) {
        if (imgElement.classList.contains('image-size-sm')) return 'sm';
        if (imgElement.classList.contains('image-size-lg')) return 'lg';
        return 'md';
    }

    addEditableListeners() {
        // Paragraph editing
        document.querySelectorAll('.editable-paragraph').forEach(p => {
            p.addEventListener('input', () => this.onContentChange());
            p.addEventListener('keydown', (e) => this.handleParagraphKeydown(e));
        });
        
        // Add new paragraph on Enter
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target.classList.contains('editable-paragraph')) {
                e.preventDefault();
                this.addParagraphAfter(e.target);
            }
        });
    }

    handleParagraphKeydown(e) {
        if (e.key === 'Backspace' && e.target.textContent.trim() === '') {
            e.preventDefault();
            this.deleteBlock(e.target.closest('.content-block'));
        }
    }

    addParagraphAfter(element) {
        const newBlock = this.createParagraphBlock(document.createElement('p'));
        const currentBlock = element.closest('.content-block');
        currentBlock.parentNode.insertBefore(newBlock, currentBlock.nextSibling);
        
        // Focus the new paragraph
        const newParagraph = newBlock.querySelector('.editable-paragraph');
        newParagraph.focus();
        
        this.onContentChange();
    }

    moveBlock(button, direction) {
        const block = button.closest('.content-block');
        const parent = block.parentNode;
        
        if (direction === 'up' && block.previousElementSibling) {
            parent.insertBefore(block, block.previousElementSibling);
        } else if (direction === 'down' && block.nextElementSibling) {
            parent.insertBefore(block.nextElementSibling, block);
        }
        
        this.onContentChange();
    }

    deleteBlock(button) {
        const block = button.closest('.content-block');
        block.remove();
        this.onContentChange();
    }

    async showImagePicker(button) {
        if (!this.currentProject) return;
        
        try {
            const images = await window.electronAPI.listImages(this.currentProject.slug);
            this.renderImageGrid(images);
            this.imagePickerModal.classList.remove('hidden');
        } catch (error) {
            console.error('Failed to load images:', error);
        }
    }

    renderImageGrid(images) {
        this.imageGrid.innerHTML = '';
        
        if (images.length === 0) {
            this.imageGrid.innerHTML = '<p>No images found in this project</p>';
            return;
        }
        
        images.forEach(image => {
            const imageItem = document.createElement('div');
            imageItem.className = 'image-item';
            imageItem.innerHTML = `
                <img src="file://${image.path}" alt="${image.name}">
                <div class="image-name">${image.name}</div>
            `;
            
            imageItem.addEventListener('click', () => this.selectImage(image));
            this.imageGrid.appendChild(imageItem);
        });
    }

    selectImage(image) {
        const block = this.imagePickerModal.querySelector('.image-item.selected')?.closest('.content-block');
        if (block) {
            const img = block.querySelector('.editor-image');
            img.src = `./images/${image.name}`;
            this.onContentChange();
        }
        
        this.hideImagePicker();
    }

    showImageSettings(button) {
        const block = button.closest('.content-block');
        const img = block.querySelector('.editor-image');
        
        this.currentImageElement = img;
        this.imageAlt.value = img.alt || '';
        
        const size = this.getImageSize(img);
        this.imageSize.value = size;
        
        if (img.style.width) {
            this.imageWidth.value = parseInt(img.style.width);
            this.customWidthGroup.style.display = 'block';
        } else {
            this.customWidthGroup.style.display = 'none';
        }
        
        this.imageSettingsModal.classList.remove('hidden');
    }

    applyImageSettingsHandler() {
        if (!this.currentImageElement) return;
        
        const img = this.currentImageElement;
        img.alt = this.imageAlt.value;
        
        // Remove existing size classes
        img.classList.remove('image-size-sm', 'image-size-md', 'image-size-lg');
        
        const size = this.imageSize.value;
        if (size === 'custom') {
            img.style.width = `${this.imageWidth.value}px`;
        } else {
            img.classList.add(`image-size-${size}`);
            img.style.width = '';
        }
        
        this.hideImageSettings();
        this.onContentChange();
    }

    hideImagePicker() {
        this.imagePickerModal.classList.add('hidden');
    }

    hideImageSettings() {
        this.imageSettingsModal.classList.add('hidden');
        this.currentImageElement = null;
    }

    onContentChange() {
        // Debounced save
        clearTimeout(this.saveTimeout);
        this.saveTimeout = setTimeout(() => this.autoSave(), 1000);
        
        // Add to history
        const currentHtml = this.serializeContent();
        if (currentHtml !== this.history[this.historyIndex]) {
            this.history = this.history.slice(0, this.historyIndex + 1);
            this.history.push(currentHtml);
            this.historyIndex++;
            this.updateUndoRedoButtons();
        }
    }

    async autoSave() {
        try {
            await this.savePage(true);
        } catch (error) {
            console.error('Auto-save failed:', error);
        }
    }

    async savePage(isAutoSave = false) {
        if (!this.currentPagePath) return;
        
        try {
            const content = this.serializeContent();
            await window.electronAPI.savePage(this.currentPagePath, content);
            
            if (!isAutoSave) {
                this.showSaveStatus('Saved successfully!', 'saved');
            }
        } catch (error) {
            console.error('Save failed:', error);
            this.showSaveStatus('Save failed: ' + error.message, 'error');
        }
    }

    serializeContent() {
        // Create a temporary container
        const container = document.createElement('div');
        
        // Clone the content blocks
        this.editorContent.querySelectorAll('.content-block').forEach(block => {
            const clone = block.cloneNode(true);
            
            // Remove controls
            clone.querySelector('.block-controls')?.remove();
            
            // Convert editable paragraphs back to regular paragraphs
            const editableP = clone.querySelector('.editable-paragraph');
            if (editableP) {
                const p = document.createElement('p');
                p.innerHTML = editableP.innerHTML;
                clone.replaceChild(p, editableP);
            }
            
            container.appendChild(clone);
        });
        
        return this.serializer.serialize(container);
    }

    undo() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            this.renderPageContent(this.history[this.historyIndex]);
            this.updateUndoRedoButtons();
        }
    }

    redo() {
        if (this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            this.renderPageContent(this.history[this.historyIndex]);
            this.updateUndoRedoButtons();
        }
    }

    updateUndoRedoButtons() {
        this.undoBtn.disabled = this.historyIndex <= 0;
        this.redoBtn.disabled = this.historyIndex >= this.history.length - 1;
    }

    handleKeyboardShortcuts(e) {
        if (e.metaKey || e.ctrlKey) {
            switch (e.key) {
                case 's':
                    e.preventDefault();
                    this.savePage();
                    break;
                case 'z':
                    e.preventDefault();
                    if (e.shiftKey) {
                        this.redo();
                    } else {
                        this.undo();
                    }
                    break;
            }
        }
        
        if ((e.metaKey || e.ctrlKey) && e.shiftKey) {
            switch (e.key) {
                case 'n':
                    e.preventDefault();
                    this.addNewParagraph();
                    break;
                case 'i':
                    e.preventDefault();
                    this.addNewImage();
                    break;
            }
        }
    }

    addNewParagraph() {
        const newBlock = this.createParagraphBlock(document.createElement('p'));
        this.editorContent.appendChild(newBlock);
        
        const newParagraph = newBlock.querySelector('.editable-paragraph');
        newParagraph.focus();
        
        this.onContentChange();
    }

    async addNewImage() {
        if (!this.currentProject) return;
        
        try {
            const images = await window.electronAPI.listImages(this.currentProject.slug);
            if (images.length > 0) {
                const newBlock = this.createImageBlock(document.createElement('img'));
                const img = newBlock.querySelector('.editor-image');
                img.src = `./images/${images[0].name}`;
                img.alt = 'New image';
                
                this.editorContent.appendChild(newBlock);
                this.onContentChange();
            }
        } catch (error) {
            console.error('Failed to add new image:', error);
        }
    }

    showSaveStatus(message, type) {
        this.saveStatus.textContent = message;
        this.saveStatus.className = type;
        
        setTimeout(() => {
            this.saveStatus.textContent = '';
            this.saveStatus.className = '';
        }, 3000);
    }

    showError(message) {
        this.showSaveStatus(message, 'error');
    }
}

// Initialize the editor when the page loads
let editor;
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired - initializing editor');
    editor = new PortfolioEditor();
});

// Also try immediate initialization
console.log('Script loaded - checking if DOM is ready');
if (document.readyState === 'loading') {
    console.log('DOM still loading, waiting for DOMContentLoaded');
} else {
    console.log('DOM already ready, initializing immediately');
    editor = new PortfolioEditor();
}
