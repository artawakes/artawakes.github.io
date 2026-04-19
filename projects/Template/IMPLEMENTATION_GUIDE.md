# Unused Images Carousel Implementation Guide

## 📋 Overview

This guide explains how to implement the unused images carousel feature that displays additional project images that weren't used in the main project content.

## 🎯 Features

- **Responsive Design**: Works on mobile and desktop
- **Keyboard Navigation**: Left/right arrow keys
- **Smooth Transitions**: Hover effects and animations
- **Accessible**: Proper ARIA labels and screen reader support
- **Auto-generated**: Only shows if unused images exist
- **Consistent Styling**: Matches existing project page design

## 📁 Files Created

1. **`unused-images-carousel-example.html`** - Standalone example showing the carousel
2. **`unused-images-carousel.js`** - Reusable JavaScript module
3. **`integration-example.html`** - Example of integration into existing project page
4. **`IMPLEMENTATION_GUIDE.md`** - This guide

## 🔧 Implementation Steps

### Step 1: Add Container to Project Page

Add this HTML container at the end of your project page (before the footer):

```html
<!-- Add this before the footer section -->
<div id="unused-images-carousel"></div>
```

### Step 2: Include the JavaScript Module

Add this script tag to your project page:

```html
<script src="./unused-images-carousel.js"></script>
```

### Step 3: Define Unused Images Data

Create an array of unused images for your project:

```javascript
const unusedImages = [
    {
        src: "./Images/unused-image-1.jpg",
        alt: "Additional project image 1",
        thumbnail: "./Images/unused-image-1.jpg" // Optional: separate thumbnail
    },
    {
        src: "./Images/unused-image-2.jpg",
        alt: "Additional project image 2",
        thumbnail: "./Images/unused-image-2.jpg"
    }
    // ... more images
];
```

### Step 4: Initialize the Carousel

Add this script to initialize the carousel:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    initUnusedImagesCarousel(
        'unused-images-carousel', // Container ID
        unusedImages,             // Images array
        'Project Name'            // Project name for title
    );
});
```

## 📊 Unused Images by Project

Based on the analysis, here are the unused images for each project:

### Creative Tonic Agency (3 unused images)
- `550df7ce-b5df-490d-b6f7-61b4751efbf2_rw_1920.jpg`
- `4eb8eb06-c488-4381-bf55-65a630d1910a_rw_1920.jpg`
- `0946139f-6bea-4650-9ffb-902d9d7889cd_rw_1920.jpg`

### EA Design System (20+ unused images)
- Various images in subdirectories (Audit/, Components/, Development/, etc.)

### EA Digital Workspace (17 unused images)
- Multiple workspace-related images

### EA Learning Management (34 unused images)
- Various learning platform images

### Fresh2Design (7 unused images)
- Additional design and branding images

### Human Centered Design (29 unused images)
- Various design process and research images

### Lyft Driver App (1 unused image)
- `18a3ea79-c34e-47c5-a0bb-364fd0a8ad7b_rw_1200.jpg`

### Lyft Home Search (6 unused images)
- Additional search interface images

### Lyft RMIS (35 unused images)
- Various risk management interface images

### Salesforce CRM (9 unused images)
- Additional CRM interface images

### Forkright Brand (24 unused images)
- Various branding and design images

### PMG Digital Marketing (0 unused images)
- All images are currently used

### Order Dashboard Design (0 unused images)
- All images are currently used (placeholder images)

## 🎨 Customization Options

### Change Background Gradient
Modify the CSS in `unused-images-carousel.js`:

```css
.carousel-container {
    background: linear-gradient(180deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
}
```

### Change Thumbnail Size
Modify the thumbnail width/height:

```css
.thumbnail {
    width: 20px;  /* Change from 16 (64px) */
    height: 20px; /* Change from 16 (64px) */
}
```

### Change Main Image Height
Modify the main display area:

```css
.relative h-96 /* Change from h-96 (384px) to h-80 (320px) or h-[500px] */
```

## 🔍 Testing

1. **Visual Testing**: Check that images load correctly
2. **Navigation Testing**: Test arrow buttons and keyboard navigation
3. **Responsive Testing**: Test on mobile and desktop
4. **Accessibility Testing**: Verify screen reader compatibility

## 🚀 Deployment

1. Copy `unused-images-carousel.js` to each project directory
2. Add the container div to each project's `index.html`
3. Add the initialization script with project-specific unused images
4. Test each project page

## 📝 Notes

- The carousel only appears if there are unused images
- Images are displayed in the order they appear in the array
- Thumbnails are automatically generated from the main images
- The component is fully responsive and accessible
- Keyboard navigation works with left/right arrow keys

## 🎯 Next Steps

1. Review the example files
2. Choose which projects to implement first
3. Create the unused images arrays for each project
4. Implement the carousel on one project as a test
5. Deploy to all projects if satisfied with the results
