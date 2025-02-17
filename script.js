
document.addEventListener('DOMContentLoaded', function() {
    const scrollGrid = document.getElementById('servicesGrid');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');
    const cardWidth = 150 + 32; // card width + gap
    const scrollAmount = cardWidth* 2; // Scroll 2 cards at a time

    // Initial button state
    updateScrollButtons();

    scrollLeftBtn.addEventListener('click', () => {
        scrollGrid.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
        setTimeout(updateScrollButtons, 100);
    });

    scrollRightBtn.addEventListener('click', () => {
        scrollGrid.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
        setTimeout(updateScrollButtons, 100);
    });

    // Update button states based on scroll position
    function updateScrollButtons() {
        const { scrollLeft, scrollWidth, clientWidth } = scrollGrid;
        
        scrollLeftBtn.disabled = scrollLeft <= 0;
        scrollRightBtn.disabled = scrollLeft >= scrollWidth - clientWidth - 1;
    }

    // Update buttons on scroll
    scrollGrid.addEventListener('scroll', updateScrollButtons);

    // Update buttons on window resize
    window.addEventListener('resize', updateScrollButtons);
});
