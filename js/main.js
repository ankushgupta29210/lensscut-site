document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Navbar Glassmorphism on Scroll
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Scroll Reveal Animations (Intersection Observer)
    // This watches for elements with 'fade-on-scroll' and triggers them when they enter the viewport
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    fadeElements.forEach(el => observer.observe(el));

    // 3. Mobile Burger Menu Toggle
    const burger = document.getElementById('burger-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Burger Animation
        burger.children[0].classList.toggle('line1');
        burger.children[1].classList.toggle('line2');
        burger.children[2].classList.toggle('line3');
    });
});
