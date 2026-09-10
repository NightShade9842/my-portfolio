// ========================================
// NAVIGATION
// ========================================

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
}

// Close menu on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
});

// ========================================
// PROJECT DATA
// ========================================

const projectsData = {
    // PROJECT 1: SABAODY AI (Web App)
    sabaody: {
        title: "SABAODY AI - Pirate-Themed AI Web App",
        badge: "⭐ Featured",
        description: `
            A powerful, pirate-themed AI web app built by Gol D. Shade.
            Chat with SABAODY, generate images, create AI videos, speak with voice,
            check weather, search lyrics, translate text, capture screenshots,
            play quizzes, remove image backgrounds, and more — all from one
            beautiful, mobile-friendly interface.
            <br><br>
            <strong>🔒 Security Features:</strong> CORS restricted, rate limiting,
            environment variables for keys, and API proxying to keep external keys hidden.
            <br><br>
            <strong>📱 PWA:</strong> Install as a standalone app on mobile.
        `,
        tech: ["Node.js", "AI/ML", "REST APIs", "PWA", "JavaScript", "Security"],
        video: "videos/sabaodyai-demo.mp4",
        links: [
            { text: "Visit Project", icon: "fas fa-external-link-alt", url: "https://sabaody-ai.vercel.app/", class: "btn-primary" },
            { text: "View Showcase", icon: "fas fa-info-circle", url: "https://github.com/NightShade9842/sabaody-showcase", class: "btn-outline" }
        ],
        screenshots: [
            "images/sabaody-ss1.jpg",
            "images/sabaody-ss2.jpg",
            "images/sabaody-ss3.jpg"
        ]
    },

    // PROJECT 2: SABAODY RPG (Bot + Website)
    sabaodyrpg: {
        title: "SABAODY RPG - Anime RPG + Marketplace",
        badge: "⭐ Featured",
        description: `
            The most advanced anime RPG game on WhatsApp plus a full marketplace website.
            <br><br>
            <strong>📱 Bot:</strong> Anime Cards, Live Duels, Pokémon, Pirate Crews, Casino Island, Full Economy, 15+ Mini-Games, Leaderboards.
            <br>
            <strong>🌐 Website:</strong> Buy, sell, trade, and auction cards, Pokémon, and items — synced with the bot in real-time.
            <br><br>
            ⚡ 24/7 ONLINE | FREE TO PLAY
        `,
        tech: ["Node.js", "WhatsApp API", "Game Logic", "Marketplace"],
        video: "videos/sabaodyrpg-demo.mp4",
        links: [
            { text: "Visit Bot", icon: "fab fa-whatsapp", url: "https://chat.whatsapp.com/LMlqn66KcQgG2LbDDTNFKF", class: "btn-primary" },
            { text: "Visit Website", icon: "fas fa-globe", url: "#", class: "btn-outline" } // placeholder
        ],
        tabs: [
            {
                name: "Bot",
                icon: "fab fa-whatsapp",
                screenshots: [
                    "images/sabaodybot-ss1.jpg",
                    "images/sabaodybot-ss2.jpg",
                    "images/sabaodybot-ss3.jpg"
                ]
            },
            {
                name: "Website",
                icon: "fas fa-globe",
                screenshots: [
                    "images/sabaodyweb-ss1.jpg",
                    "images/sabaodyweb-ss2.jpg",
                    "images/sabaodyweb-ss3.jpg"
                ]
            }
        ]
    },

    // PROJECT 3: DUAPA (Bot + Website)
    duapa: {
        title: "Duapa - Voice-First AI Store Builder",
        badge: "⭐ Featured",
        description: `
            Duapa is a voice-first AI store builder and social commerce platform
            for Ghana's micro-sellers. Sellers create online stores by talking to
            a WhatsApp assistant in Twi, Ga, Hausa, Ewe, or English. They upload
            products with photos and TikTok-style reels, set their MoMo number,
            and share a live store link. Buyers browse the store, see the seller's
            verified MoMo details, and pay manually with a transaction ID to confirm.
            <br><br>
            <strong>🚀 Problem Solved:</strong> 80% of Ghanaian micro-sellers are informal
            and have no digital storefront. Duapa gives them one by simply speaking.
            <br><br>
            <strong>👥 Team:</strong> Built with GrandLine Fleet.
        `,
        tech: ["Node.js", "WhatsApp API", "AI/NLP", "React", "MongoDB", "Express"],
        video: "videos/duapa-demo.mp4",
        links: [
            { text: "Visit Bot", icon: "fab fa-whatsapp", url: "#", class: "btn-primary" },
            { text: "Visit Website", icon: "fas fa-globe", url: "#", class: "btn-outline" }
        ],
        tabs: [
            {
                name: "Bot",
                icon: "fab fa-whatsapp",
                screenshots: [
                    "images/duapa-ss1.jpg",
                    "images/duapa-ss2.jpg",
                    "images/duapa-ss3.jpg"
                ]
            },
            {
                name: "Website",
                icon: "fas fa-globe",
                screenshots: [
                    "images/duapaweb-ss1.jpg",
                    "images/duapaweb-ss2.jpg",
                    "images/duapaweb-ss3.jpg"
                ]
            }
        ]
    },

    // PROJECT 4: DUSKFALL
    duskfall: {
        title: "Duskfall - 3D Zombie Survival Game",
        badge: "🚀 In Development",
        description: `
            A 3D zombie survival game built with <strong>Godot 4.7</strong>.
            Players must survive waves of zombies in a dark, atmospheric world.
            <br><br>
            <strong>🎯 Key Features:</strong>
            <br>
            • 3D zombie survival mechanics
            <br>
            • Automated APK and EXE builds via GitHub Actions
            <br>
            • AI-generated 3D models and textures
            <br>
            • Immersive dark atmosphere
            <br><br>
            <strong>⚙️ Workflow:</strong> Push to GitHub → GitHub Actions builds APK/EXE automatically
        `,
        tech: ["Godot 4.7", "GDScript", "GitHub Actions", "3D Modeling", "Game Design"],
        video: "videos/duskfall-demo.mp4",
        links: [
            { text: "View GitHub", icon: "fab fa-github", url: "https://github.com/NightShade9842/duskfall", class: "btn-primary" }
        ],
        screenshots: [
            "images/duskfall-ss1.jpg",
            "images/duskfall-ss2.jpg",
            "images/duskfall-ss3.jpg"
        ]
    }
};

// ========================================
// PROJECT MODAL
// ========================================

const modal = document.getElementById('projectModal');
const closeBtn = document.getElementById('closeModal');
const modalVideo = document.getElementById('modalVideo');
const modalTitle = document.getElementById('modalTitle');
const modalBadge = document.getElementById('modalBadge');
const modalDescription = document.getElementById('modalDescription');
const modalTech = document.getElementById('modalTech');
const modalLinks = document.getElementById('modalLinks');
const modalTabs = document.getElementById('modalTabs');
const slideshowWrapper = document.getElementById('slideshowWrapper');
let swiperInstance = null;
let currentScreenshots = [];

// Helper: Render slideshow for given screenshots
function renderSlideshow(screenshots) {
    slideshowWrapper.innerHTML = '';
    currentScreenshots = screenshots || [];

    if (!currentScreenshots.length) {
        // If no screenshots, hide slideshow container or show a placeholder
        document.querySelector('.modal-slideshow').style.display = 'none';
        return;
    } else {
        document.querySelector('.modal-slideshow').style.display = 'block';
    }

    currentScreenshots.forEach(src => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `<img src="${src}" alt="Screenshot" />`;
        slideshowWrapper.appendChild(slide);
    });

    // Initialize Swiper after a short delay
    setTimeout(() => {
        if (swiperInstance) {
            swiperInstance.destroy(true, true);
        }
        swiperInstance = new Swiper('.mySwiper', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: true,
            },
        });
    }, 100);
}

// Helper: Render tabs for a project
function renderTabs(project) {
    modalTabs.innerHTML = '';

    if (!project.tabs || project.tabs.length === 0) {
        // No tabs: hide tab container
        modalTabs.style.display = 'none';
        return;
    }

    modalTabs.style.display = 'flex';

    // Create tab buttons
    project.tabs.forEach((tab, index) => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
        btn.innerHTML = `<i class="${tab.icon}"></i> ${tab.name}`;
        btn.dataset.index = index;

        btn.addEventListener('click', () => {
            // Update active class
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update slideshow
            const selectedTab = project.tabs[index];
            renderSlideshow(selectedTab.screenshots);
        });

        modalTabs.appendChild(btn);
    });

    // Show slideshow for first tab
    renderSlideshow(project.tabs[0].screenshots);
}

// Helper: Render links
function renderLinks(project) {
    modalLinks.innerHTML = '';

    if (!project.links || project.links.length === 0) {
        modalLinks.style.display = 'none';
        return;
    }

    modalLinks.style.display = 'flex';

    project.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.className = `btn ${link.class}`;
        a.target = '_blank';
        a.innerHTML = `<i class="${link.icon}"></i> ${link.text}`;
        modalLinks.appendChild(a);
    });
}

// Open modal
function openModal(projectKey) {
    const project = projectsData[projectKey];
    if (!project) return;

    // Set video
    if (project.video && project.video !== '#') {
        modalVideo.src = project.video;
        modalVideo.poster = 'images/placeholder-poster.jpg';
        modalVideo.style.display = 'block';
        modalVideo.load();
    } else {
        modalVideo.style.display = 'none';
    }

    // Set title
    modalTitle.textContent = project.title;

    // Set badge
    modalBadge.textContent = project.badge;

    // Set description
    modalDescription.innerHTML = project.description;

    // Set tech stack
    modalTech.innerHTML = project.tech.map(t => `<span>${t}</span>`).join('');

    // Render links
    renderLinks(project);

    // Render tabs & slideshow
    if (project.tabs && project.tabs.length > 0) {
        renderTabs(project);
    } else {
        modalTabs.innerHTML = '';
        modalTabs.style.display = 'none';
        renderSlideshow(project.screenshots);
    }

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Reset video
    modalVideo.pause();
    modalVideo.currentTime = 0;
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    modalVideo.pause();
    modalVideo.currentTime = 0;
    if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
    }
}

// ========================================
// EVENT LISTENERS
// ========================================

// View Project buttons
document.querySelectorAll('.view-project-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const projectKey = this.dataset.project;
        if (projectKey && projectsData[projectKey]) {
            openModal(projectKey);
        }
    });
});

// Click on card (anywhere) opens modal
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Don't trigger if clicking on the button (already handled)
        if (e.target.closest('.view-project-btn')) return;
        const projectKey = this.dataset.project;
        if (projectKey && projectsData[projectKey]) {
            openModal(projectKey);
        }
    });
});

// Close modal
if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

// ========================================
// SMOOTH SCROLL
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

document.querySelectorAll('.project-card, .section-header, .robotics-content, .about-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// TYPING ANIMATION
// ========================================

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
    setTimeout(typeText, 1000);
}

// ========================================
// CONSOLE BANNER
// ========================================

console.log('%c🏴‍☠️ SABAODY AI', 'font-size: 24px; font-weight: bold; color: #6c63ff;');
console.log('%cBuilt with ❤️ by Freduah Dominic Kwakye', 'font-size: 14px; color: #8888aa;');
console.log('%chttps://github.com/NightShade9842', 'font-size: 12px; color: #00d2ff;');

console.log('%c📦 Projects Built:', 'font-size: 14px; font-weight: bold; color: #fff;');
console.log('  ⭐ SABAODY AI - Pirate-Themed AI Web App');
console.log('  ⭐ SABAODY RPG - Anime RPG + Marketplace');
console.log('  ⭐ Duapa - Voice-First AI Store Builder');
console.log('  🚀 Duskfall - 3D Zombie Survival Game');

console.log('%c🚀 Built by Gol D. Shade', 'font-size: 12px; color: #ff6b6b;');

// Keyboard shortcut: Press 'M' to toggle modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'm' || e.key === 'M') {
        if (modal.classList.contains('active')) {
            closeModal();
        } else {
            const firstProject = document.querySelector('.project-card');
            if (firstProject) {
                const key = firstProject.dataset.project;
                if (key && projectsData[key]) {
                    openModal(key);
                }
            }
        }
    }
});

console.log('%c💡 Press "M" to toggle modal demo', 'font-size: 12px; color: #8888aa;');