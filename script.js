// ========================================
// NAVIGATION
// ========================================

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close menu on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ========================================
// PROJECT VIDEO - DOUBLE CLICK FEATURE
// ========================================

document.querySelectorAll('.project-media').forEach(media => {
    const img = media.querySelector('.project-img');
    const video = media.querySelector('.project-video');
    const overlay = media.querySelector('.video-overlay');

    // Double click to play video
    media.addEventListener('dblclick', () => {
        if (video && video.querySelector('source')) {
            // Hide image, show video
            img.classList.add('hidden');
            video.classList.add('active');
            video.play();
            overlay.style.opacity = '0';

            // When video ends, show image again
            video.onended = () => {
                video.classList.remove('active');
                img.classList.remove('hidden');
                overlay.style.opacity = '1';
            };
        }
    });

    // Hover effect for overlay
    media.addEventListener('mouseenter', () => {
        if (!video.classList.contains('active')) {
            overlay.style.opacity = '1';
        }
    });

    media.addEventListener('mouseleave', () => {
        if (!video.classList.contains('active')) {
            overlay.style.opacity = '0';
        }
    });
});

// ========================================
// SMOOTH SCROLL FOR NAV LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// REVEAL ANIMATIONS ON SCROLL
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe section headers
document.querySelectorAll('.section-header').forEach(header => {
    header.style.opacity = '0';
    header.style.transform = 'translateY(20px)';
    header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(header);
});

// ========================================
// TYPING ANIMATION FOR HERO
// ========================================

// Simple typing effect for the subtitle
const subtitle = document.querySelector('.hero-subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let index = 0;

    function typeText() {
        if (index < text.length) {
            subtitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 50);
        }
    }

    // Start typing after a short delay
    setTimeout(typeText, 1000);
}

console.log('🚀 Duapa by GrandLine Fleet - Built with ❤️');
console.log('💻 Freduah Dominic Kwakye - Portfolio');