document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const burger = document.getElementById('burger-menu');
    const nav = document.querySelector('.nav-links');

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Contact Form Submission (Mock)
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = "Sending...";
            btn.style.opacity = "0.7";

            // Simulate API call
            setTimeout(() => {
                btn.innerText = "Message Sent!";
                btn.style.background = "#28a745";
                btn.style.color = "#fff";
                form.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = "var(--accent-color)";
                    btn.style.color = "var(--bg-color)";
                    btn.style.opacity = "1";
                }, 3000);
            }, 1500);
        });
    }
});
