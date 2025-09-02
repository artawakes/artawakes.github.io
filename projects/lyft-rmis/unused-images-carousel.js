// Unused Images Carousel Module
// This module creates a carousel component for displaying unused images from a project

class UnusedImagesCarousel {
    constructor(containerId, unusedImages, projectName) {
        this.containerId = containerId;
        this.unusedImages = unusedImages;
        this.projectName = projectName;
        this.currentIndex = 0;
        this.totalImages = unusedImages.length;
        
        this.init();
    }
    
    init() {
        if (this.totalImages === 0) return; // Don't create carousel if no unused images
        
        const container = document.getElementById(this.containerId);
        if (!container) return;
        
        container.innerHTML = this.createCarouselHTML();
        this.bindEvents();
        this.updateImage(0);
    }
    
    createCarouselHTML() {
        return `
            <section class="mb-16">
                <h2 class="text-2xl font-bold mb-6">Additional Project Images</h2>
                <div class="bg-card rounded-lg border p-6">
                    
                    <!-- Carousel Container -->
                    <div class="carousel-container rounded-lg overflow-hidden relative">
                        <!-- Main Image Display -->
                        <div class="relative h-96 flex items-center justify-center">
                            <!-- Navigation Buttons -->
                            <button class="nav-button absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-lg z-10" onclick="unusedCarousel.previousImage()" aria-label="Previous image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m15 18-6-6 6-6"/>
                                </svg>
                            </button>
                            
                            <button class="nav-button absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-lg z-10" onclick="unusedCarousel.nextImage()" aria-label="Next image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m9 18 6-6-6-6"/>
                                </svg>
                            </button>
                            
                            <!-- Main Image -->
                            <img id="mainUnusedImage" src="" alt="Unused project image" class="main-image max-w-full max-h-full object-contain">
                        </div>
                        
                        <!-- Thumbnails -->
                        <div class="bg-white/90 p-4">
                            <div class="flex gap-2 overflow-x-auto pb-2" id="thumbnailsContainer">
                                ${this.createThumbnailsHTML()}
                            </div>
                        </div>
                    </div>
                    
                    <!-- Image Info -->
                    <div class="mt-4 text-center">
                        <p class="text-sm text-muted-foreground">
                            <span id="imageCounter">1</span> of <span id="totalImages">${this.totalImages}</span> additional images
                        </p>
                        <p class="text-xs text-muted-foreground mt-1">Click thumbnails or use navigation arrows to browse</p>
                    </div>
                </div>
            </section>
        `;
    }
    
    createThumbnailsHTML() {
        return this.unusedImages.map((image, index) => `
            <div class="thumbnail flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${index === 0 ? 'border-primary' : 'border-transparent'}" 
                 onclick="unusedCarousel.selectImage(${index})" 
                 data-index="${index}">
                <img src="${image.thumbnail || image.src}" alt="Thumbnail ${index + 1}" class="w-full h-full object-cover">
            </div>
        `).join('');
    }
    
    bindEvents() {
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.previousImage();
            } else if (e.key === 'ArrowRight') {
                this.nextImage();
            }
        });
    }
    
    updateImage(index) {
        const mainImage = document.getElementById('mainUnusedImage');
        const imageCounter = document.getElementById('imageCounter');
        const thumbnails = document.querySelectorAll('.thumbnail');
        
        if (!mainImage || !imageCounter) return;
        
        // Update main image
        mainImage.src = this.unusedImages[index].src;
        mainImage.alt = this.unusedImages[index].alt || `Additional project image ${index + 1}`;
        
        // Update counter
        imageCounter.textContent = index + 1;
        
        // Update thumbnail active state
        thumbnails.forEach((thumb, i) => {
            if (i === index) {
                thumb.classList.add('active');
                thumb.classList.remove('border-transparent');
                thumb.classList.add('border-primary');
            } else {
                thumb.classList.remove('active');
                thumb.classList.remove('border-primary');
                thumb.classList.add('border-transparent');
            }
        });
    }
    
    selectImage(index) {
        this.currentIndex = index;
        this.updateImage(this.currentIndex);
    }
    
    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.totalImages;
        this.updateImage(this.currentIndex);
    }
    
    previousImage() {
        this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
        this.updateImage(this.currentIndex);
    }
}

// CSS styles to be added to the page
const carouselStyles = `
    <style>
        /* Carousel specific styles */
        .carousel-container {
            background: linear-gradient(180deg, #E6F3F3 0%, #B8E6E6 100%);
        }

        .thumbnail {
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .thumbnail:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .thumbnail.active {
            border: 2px solid hsl(var(--primary));
            transform: scale(1.05);
        }

        .nav-button {
            transition: all 0.3s ease;
        }

        .nav-button:hover {
            background-color: rgba(255, 255, 255, 0.2);
            transform: scale(1.1);
        }

        .main-image {
            transition: opacity 0.3s ease;
        }
    </style>
`;

// Function to initialize the carousel
function initUnusedImagesCarousel(containerId, unusedImages, projectName) {
    // Add styles to head if not already present
    if (!document.getElementById('unused-carousel-styles')) {
        const styleElement = document.createElement('div');
        styleElement.id = 'unused-carousel-styles';
        styleElement.innerHTML = carouselStyles;
        document.head.appendChild(styleElement);
    }
    
    // Create global instance
    window.unusedCarousel = new UnusedImagesCarousel(containerId, unusedImages, projectName);
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { UnusedImagesCarousel, initUnusedImagesCarousel };
}
