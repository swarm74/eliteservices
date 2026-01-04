// Initialize AOS (Animate On Scroll)
AOS.init({
    once: true,
    offset: 50,
    duration: 1000,
});

// Initialize Particles.js
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#00a493", "#00FFEF"] 
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00a493", 
            "opacity": 0.3,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab" 
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 180,
                "line_linked": {
                    "opacity": 0.6
                }
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});

/* ========================================= */
/* ADDITIONS FOR PRODUCTS PAGE         */
/* ========================================= */

// Toggle Dropdown Menus
function toggleMenu(id, el) {
    const submenu = document.getElementById(id);
    // Toggle Display
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
        el.classList.remove('open');
    } else {
        submenu.style.display = "block";
        el.classList.add('open');
    }
}

// Filter Logic
function filterProducts(category, el) {
    // 1. Manage Active Class on Links
    const allLinks = document.querySelectorAll('.sub-link');
    allLinks.forEach(link => link.classList.remove('active'));
    el.classList.add('active');

    // 2. Filter the Grid Items
    const items = document.querySelectorAll('.p-item');
    items.forEach(item => {
        if (item.dataset.cat === category) {
            item.classList.remove('hidden');
            // Re-trigger animation if desired
            item.classList.add('aos-animate'); 
        } else {
            item.classList.add('hidden');
        }
    });
}

// Open the first menu by default when page loads
window.onload = function() {
    // Check if we are on the products page by looking for the ID
    if(document.getElementById('boost-sub')) {
        toggleMenu('boost-sub', document.querySelector('.menu-item'));
    }
};
