// Main JavaScript functionality

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const moonIcon = darkModeToggle.querySelector('i');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    moonIcon.classList.toggle('bi-moon');
    moonIcon.classList.toggle('bi-sun');
    
    // Save preference to localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Check for saved user preference
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
    moonIcon.classList.replace('bi-moon', 'bi-sun');
}

darkModeToggle.addEventListener('click', toggleDarkMode);

// Project Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
                setTimeout(() => card.classList.add('show'), 0);
            } else {
                card.classList.remove('show');
                card.style.display = 'none';
            }
        });
    });
});

// Form Validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Submit form (replace with your form handling logic)
    console.log('Form submitted:', { name, email, message });
    contactForm.reset();
});

// Smooth Scroll
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            if (href === '#top') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 60;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollBy({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Password Protection for Portfolio
function checkPortfolioPassword() {
    const password = prompt('Please enter the password to view the portfolio:');
    if (password === 'your-password') { // Replace with actual password
        document.getElementById('portfolio-content').style.display = 'block';
    } else {
        alert('Incorrect password');
    }
}

// Parallax Effect
window.addEventListener('scroll', () => {
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        const scrolled = window.pageYOffset;
        parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Section visibility
const sections = document.querySelectorAll('section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Social Icons
const socialIcons = document.querySelector('.social-icons');

if (socialIcons) {
    const links = socialIcons.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            // Add any custom behavior for social icon clicks here
        });
    });
} 