document.addEventListener('DOMContentLoaded', () => {
    /* --- Scroll Animation --- */
    const animateElements = document.querySelectorAll('.animate-up, .animate-zoom');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

/* --- Product Tabs Logic --- */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const productGroups = document.querySelectorAll('.product-group');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // 1. Remove active class from all buttons
                tabBtns.forEach(b => b.classList.remove('active'));
                
                // 2. Add active class to clicked button
                btn.classList.add('active');

                // 3. Hide all product groups
                productGroups.forEach(group => group.classList.remove('active-group'));

                // 4. Show the target group
                const targetId = btn.getAttribute('data-target');
                document.getElementById(targetId).classList.add('active-group');
            });
        });
    }
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    animateElements.forEach(el => observer.observe(el));

    /* --- FAQ Accordion --- */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });

            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    /* --- Mobile Navigation Toggle --- */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});