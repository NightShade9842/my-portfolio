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
// PROJECT VIDEO - DOUBLE CLICK FEATURE
// ========================================

document.querySelectorAll('.project-media').forEach(media => {
    const img = media.querySelector('.project-img');
    const video = media.querySelector('.project-video');
    const overlay = media.querySelector('.video-overlay');

    // Double click to play video
    media.addEventListener('dblclick', (e) => {
        e.stopPropagation(); // Prevent modal from opening
        if (video && video.querySelector('source')) {
            // Hide image, show video
            if (img) img.classList.add('hidden');
            video.classList.add('active');
            video.play();
            if (overlay) overlay.style.opacity = '0';

            // When video ends, show image again
            video.onended = () => {
                video.classList.remove('active');
                if (img) img.classList.remove('hidden');
                if (overlay) overlay.style.opacity = '1';
            };
        }
    });

    // Hover effect for overlay
    media.addEventListener('mouseenter', () => {
        if (video && !video.classList.contains('active') && overlay) {
            overlay.style.opacity = '1';
        }
    });

    media.addEventListener('mouseleave', () => {
        if (video && !video.classList.contains('active') && overlay) {
            overlay.style.opacity = '0';
        }
    });
});

// ========================================
// PROJECT MODAL - CLICK TO OPEN
// ========================================

// Project Data
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
        poster: "images/sabaody-screenshot.jpg"
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
        poster: "images/sabaodybot-screenshot.jpg"
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
        poster: "images/duapa-screenshot.jpg"
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
        poster: "images/duskfall-screenshot.jpg"
    }
};

// Get modal elements
const modal = document.getElementById('projectModal');
const closeBtn = document.getElementById('closeModal');
const modalVideo = document.getElementById('modalVideo');
const modalTitle = document.getElementById('modalTitle');
const modalBadge = document.getElementById('modalBadge');
const modalDescription = document.getElementById('modalDescription');
const modalTech = document.getElementById('modalTech');
const modalLiveLink = document.getElementById('modalLiveLink');
const modalGitLink = document.getElementById('modalGitLink');

// Function to open modal with project data
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

    // Set description (with HTML support)
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

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Reset video if it was playing
    modalVideo.pause();
    modalVideo.currentTime = 0;
}

// Function to close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    modalVideo.pause();
    modalVideo.currentTime = 0;
}

// Click event for project cards
document.querySelectorAll('.project-card').forEach((card) => {
    // Get project key from data attribute
    const projectKey = card.dataset.project;

    // Click on the card opens modal
    card.addEventListener('click', function(e) {
        // Don't trigger if clicking on links
        if (e.target.closest('.btn-link') || e.target.closest('a')) return;
        // Don't trigger if it's a double-click on media (video toggle)
        if (e.target.closest('.project-media')) {
            return;
        }
        if (projectKey && projectsData[projectKey]) {
            openModal(projectKey);
        }
    });

    // Click on media area opens modal (single click)
    const media = card.querySelector('.project-media');
    if (media) {
        media.addEventListener('click', function(e) {
            // Don't trigger if it's a double-click (already handled)
            if (e.detail === 2) return;
            // Don't trigger if clicking on video overlay
            if (e.target.closest('.video-overlay')) return;
            if (projectKey && projectsData[projectKey]) {
                openModal(projectKey);
            }
        });
    }
});

// Close modal events
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

// Observe robotics and about sections
document.querySelectorAll('.robotics-content, .about-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
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

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

// Press 'M' to toggle modal (for testing)
document.addEventListener('keydown', function(e) {
    if (e.key === 'm' || e.key === 'M') {
        if (modal.classList.contains('active')) {
            closeModal();
        } else {
            // Open first project as demo
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