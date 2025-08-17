# Portfolio Editor

A simple, local-only visual editor for portfolio websites built with Electron. Edit your HTML files and swap images without touching your main website repository.

## Features

- **Local-only**: No servers, no databases, no network required
- **Visual editing**: Inline edit paragraphs and swap images
- **Image management**: Browse and select images from project folders
- **Size controls**: Small/medium/large presets + custom width slider
- **Undo/Redo**: Full editing history with keyboard shortcuts
- **Auto-save**: Automatic saving with 1-second debounce
- **Keyboard shortcuts**: Cmd/Ctrl+S save, Cmd/Ctrl+Z undo, etc.
- **Safe**: Only writes to your specified website directory

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Editor

```bash
npm start
```

### 3. Set Website Root

1. Click "Select Root" in the header
2. Navigate to your portfolio website directory (e.g., `/Users/dev/Documents/Newsite`)
3. Click "Open"

The editor will scan for projects in `{websiteRoot}/projects/*/index.html`

## Usage

### Editing Paragraphs

- Click any paragraph to edit inline
- Press Enter to create a new paragraph
- Press Backspace on empty paragraph to delete
- Use ↑/↓ buttons to reorder blocks

### Managing Images

- Click the 🖼️ button on any image to browse project images
- Click the ⚙️ button to adjust size and alt text
- Size options: Small (300px), Medium (500px), Large (800px), Custom

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Cmd/Ctrl+S | Save |
| Cmd/Ctrl+Z | Undo |
| Cmd/Ctrl+Shift+Z | Redo |
| Cmd/Ctrl+Shift+N | New paragraph |
| Cmd/Ctrl+Shift+I | Insert image |

## Project Structure

```
portfolio-editor/
├── electron/
│   ├── main.js          # Main Electron process
│   └── preload.js       # IPC bridge
├── app/
│   ├── index.html       # Main interface
│   ├── editor.js        # Editor logic
│   ├── styles.css       # Styling
│   └── config.json      # Website root path
├── lib/
│   └── domSerialize.js  # HTML serialization
├── templates/
│   └── .gitignore       # Git ignore template
└── package.json
```

## Website Structure

The editor expects your website to have this structure:

```
your-website/
├── projects/
│   ├── project-1/
│   │   ├── index.html
│   │   └── images/
│   │       ├── image1.jpg
│   │       └── image2.png
│   └── project-2/
│       ├── index.html
│       └── images/
│           └── hero.jpg
└── index.html
```

## Content Editing

The editor looks for `<p>` and `<img>` elements in your HTML files. It will:

- Convert paragraphs to editable blocks
- Allow image swapping from the project's `images/` folder
- Preserve all other HTML structure
- Apply size classes: `image-size-sm`, `image-size-md`, `image-size-lg`

## Security

- **Path validation**: Only writes to files within your website root
- **XSS prevention**: Sanitizes HTML content
- **No external access**: Completely offline
- **No uploads**: Only selects existing images

## Development

### Development Mode

```bash
npm run dev
```

This opens the editor with developer tools enabled.

### Building

```bash
npm run build
```

## Troubleshooting

### No Projects Found

1. Make sure your website root is set correctly
2. Verify projects exist in `{websiteRoot}/projects/`
3. Each project must have an `index.html` file

### Images Not Loading

1. Check that images exist in `{websiteRoot}/projects/{slug}/images/`
2. Supported formats: JPG, PNG, GIF, WebP
3. Ensure file permissions allow reading

### Save Issues

1. Check file permissions on your website directory
2. Ensure the file isn't open in another application
3. Verify the path is within your website root

### Editor Not Starting

1. Make sure Node.js and npm are installed
2. Run `npm install` to install dependencies
3. Check for any error messages in the terminal

## Configuration

The editor stores your website root path in `app/config.json`. You can manually edit this file or use the "Select Root" button in the interface.

## Limitations

- Only edits `<p>` and `<img>` elements
- Images must be in the project's `images/` folder
- No rich text formatting (bold, italic, etc.)
- No drag-and-drop reordering (use ↑/↓ buttons)

## License

ISC License - feel free to modify and use as needed.
