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
        video: "videos/sabaody-demo.mp4",
        liveLink: "https://sabaody-ai.vercel.app/",
        gitLink: "https://github.com/NightShade9842/sabaody-showcase",
        poster: "images/sabaody-screenshot.jpg",
        screenshots: [
            "images/sabaody-ss1.jpg",
            "images/sabaody-ss2.jpg",
            "images/sabaody-ss3.jpg"
        ]
    },
    sabaodybot: {
        title: "SABAODY Bot - Anime RPG on WhatsApp",
        badge: "⭐ Featured",
        description: `
            The most advanced anime RPG game on WhatsApp. 
            <br><br>
            <strong>🃏 Anime Cards:</strong> Pull One Piece cards from Mazoku & Shoob. Legendaries, Epics, Shinies.
            <br>
            <strong>⚔️ Live Duels:</strong> Real-time card battles. Build your deck. Destroy your rivals.
            <br>
            <strong>🐉 Pokémon:</strong> Catch. Train. Evolve. Battle with a full party of 6.
            <br>
            <strong>🏴‍☠️ Pirate Crews:</strong> Create a guild. Pick your class — Warrior, Mage, Archer, Summoner, Healer, Rogue, Paladin. Forge weapons. Rule together.
            <br>
            <strong>🎰 Casino Island:</strong> Coinflip. Roulette. Slots. War. Hi-Lo. Horse Racing. MASSIVE Jackpot.
            <br>
            <strong>💎 Full Economy:</strong> Earn Beli & Gems. Trade cards & Pokémon. Auction rares. Rob the rich. Get rich.
            <br>
            <strong>🎯 15+ Mini-Games:</strong> Chess, Connect 4, Tic-Tac-Toe, Battleship, Hangman, Word Chain, Truth or Dare...
            <br>
            <strong>🏆 Leaderboards:</strong> Richest. Strongest. Most Legendary cards. Prove YOU are the Pirate King.
            <br><br>
            ⚡ 24/7 ONLINE | FREE TO PLAY
        `,
        tech: ["Node.js", "WhatsApp API", "Game Logic", "Economy System"],
        video: "videos/sabaodybot-demo.mp4",
        liveLink: "https://chat.whatsapp.com/LMlqn66KcQgG2LbDDTNFKF",
        gitLink: "https://github.com/NightShade9842/sabaodybot-showcase",
        poster: "images/sabaodybot-screenshot.jpg",
        screenshots: [
            "images/sabaodybot-ss1.jpg",
            "images/sabaodybot-ss2.jpg",
            "images/sabaodybot-ss3.jpg"
        ]
    },
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
        liveLink: "#",
        gitLink: "https://github.com/NightShade9842/duapa-showcase",
        poster: "images/duapa-screenshot.jpg",
        screenshots: [
            "images/duapa-ss1.jpg",
            "images/duapa-ss2.jpg",
            "images/duapa-ss3.jpg"
        ]
    },
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
            <br>
            <strong>🔄 Current Placeholders:</strong> Player model (test1.glb), Grass textures
        `,
        tech: ["Godot 4.7", "GDScript", "GitHub Actions", "3D Modeling", "Game Design"],
        video: "videos/duskfall-demo.mp4",
        liveLink: "#",
        gitLink: "https://github.com/NightShade9842/duskfall",
        poster: "images/duskfall-screenshot.jpg",
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
const modalLiveLink = document.getElementById('modalLiveLink');
const modalGitLink = document.getElementById('modalGitLink');
const slideshowWrapper = document.getElementById('slideshowWrapper');
let swiperInstance = null;

function openModal(projectKey) {
    const project = projectsData[projectKey];
    if (!project) return;

    // Set video
    if (project.video && project.video !== '#') {
        modalVideo.src = project.video;
        modalVideo.poster = project.poster || 'images/placeholder-poster.jpg';
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

    // Set links
    if (project.liveLink && project.liveLink !== '#') {
        modalLiveLink.href = project.liveLink;
        modalLiveLink.style.display = 'inline-flex';
    } else {
        modalLiveLink.style.display = 'none';
    }

    if (project.gitLink && project.gitLink !== '#') {
        modalGitLink.href = project.gitLink;
        modalGitLink.style.display = 'inline-flex';
    } else {
        modalGitLink.style.display = 'none';
    }

    // Set slideshow
    slideshowWrapper.innerHTML = '';
    if (project.screenshots && project.screenshots.length > 0) {
        project.screenshots.forEach(src => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.innerHTML = `<img src="${src}" alt="Screenshot" />`;
            slideshowWrapper.appendChild(slide);
        });
    }

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Reset video
    modalVideo.pause();
    modalVideo.currentTime = 0;

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
    }, 300);
}

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
console.log('  ⭐ SABAODY Bot - Anime RPG on WhatsApp');
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