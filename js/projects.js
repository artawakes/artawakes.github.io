document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.project-cards-container');
    const cards = Array.from(document.querySelectorAll('.project-card'));
    let activeCard = null;

    // Handle card click
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // If this card is already active, do nothing
            if (card === activeCard) return;

            // Remove active class from previous card
            if (activeCard) {
                activeCard.classList.remove('active');
            }

            // Add active class to clicked card
            card.classList.add('active');
            activeCard = card;

            // Scroll the card into view with smooth animation
            const containerLeft = container.getBoundingClientRect().left;
            const cardLeft = card.getBoundingClientRect().left;
            const scrollOffset = cardLeft - containerLeft - 24; // 24px for padding

            container.scrollTo({
                left: container.scrollLeft + scrollOffset,
                behavior: 'smooth'
            });
        });

        // Make sure card is visible by default
        card.style.display = 'block';
    });

    // Handle scroll snap
    let isScrolling;
    container.addEventListener('scroll', () => {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            const containerLeft = container.getBoundingClientRect().left;
            
            // Find the card closest to the container's left edge
            let closestCard = null;
            let closestDistance = Infinity;
            
            cards.forEach(card => {
                const cardLeft = card.getBoundingClientRect().left;
                const distance = Math.abs(cardLeft - containerLeft);
                
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestCard = card;
                }
            });

            // Activate the closest card
            if (closestCard && closestCard !== activeCard) {
                if (activeCard) {
                    activeCard.classList.remove('active');
                }
                closestCard.classList.add('active');
                activeCard = closestCard;
            }
        }, 150);
    });

    // Set first card as active initially
    cards[0].classList.add('active');
    activeCard = cards[0];

    // Add hover effect handlers
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (card !== activeCard) {
                card.classList.add('hover');
            }
        });

        card.addEventListener('mouseleave', () => {
            if (card !== activeCard) {
                card.classList.remove('hover');
            }
        });
    });
}); 