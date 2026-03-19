// Simple Intersection Observer to fade elements in as you scroll down
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        // Initial setup for CSS
        fader.style.opacity = 0;
        fader.style.transform = "translateY(20px)";
        fader.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        
        appearOnScroll.observe(fader);
    });

    // Helper class added by JS
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .fade-in.appear {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        </style>
    `);
});
