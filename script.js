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
            { text: "Join WhatsApp Crew", icon: "fab fa-whatsapp", url: "https://chat.whatsapp.com/Hanm4DeLXxz62gRNB9w28v", class: "btn-primary" },
            { text: "Visit Website", icon: "fas fa-globe", url: "https://sabaody-web-static.vercel.app/", class: "btn-outline" }
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
        title: "Duapa - Voice-First AI Store Builder & Social Commerce Platform",
        badge: "⭐ Featured",
        description: `
            Duapa by <strong>GrandLine Fleet</strong> is a voice-first AI store builder and social commerce platform
            that enables Ghana's informal micro-sellers to create online stores via WhatsApp using voice or text
            in <strong>Twi, Ga, Hausa, Ewe, or English</strong>.
            <br><br>
            Sellers upload product photos and short video reels, set their MoMo number and name, and share a
            live store link. Buyers browse the store, see verified payment details, and pay manually via mobile
            money with transaction ID confirmation.
            <br><br>
            <strong>🚀 Problem Solved:</strong> Over 80% of Ghanaian micro-sellers — market women, tailors,
            food vendors, phone repairers — run their businesses informally through WhatsApp with no digital
            storefront, no verified payment details, and no trust system. Duapa turns any WhatsApp seller into
            a digital business in <strong>under 60 seconds</strong>.
            <br><br>
            <strong>⚡ Live Now:</strong> Working WhatsApp bot, live website with dashboard, backend API,
            and manual payment flow tested end-to-end.
            <br><br>
            <strong>💰 Business Model:</strong> 1.5% transaction fee, premium subscriptions, featured listings.
            <br>
            <strong>🎯 The Ask:</strong> $1,000 and 6 months of mentorship to onboard 100 pilot sellers and
            prepare for a seed round.
        `,
        tech: ["Node.js", "WhatsApp API", "AI/NLP", "React", "MySQL", "Express", "Vercel"],
        video: "videos/duapa-demo.mp4",
        links: [
            { text: "Visit Website", icon: "fas fa-globe", url: "https://duapa-theta.vercel.app", class: "btn-primary" },
            { text: "WhatsApp Bot", icon: "fab fa-whatsapp", url: "https://wa.me/233560806367", class: "btn-outline" }
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
        title: "Duskfall - Open-World Zombie Survival RPG",
        badge: "🚀 In Development",
        description: `
            <strong>Survive the outbreak. Rule the ruins. Become the legend of the new world.</strong>
            <br><br>
            Duskfall is an open-world zombie survival RPG that blends the freedom of <strong>GTA</strong>,
            the depth of <strong>Red Dead Redemption</strong>, and the intensity of <strong>The Last of Us</strong> —
            all set in a richly detailed African-inspired city fighting to survive the apocalypse.
            <br><br>
            Built with <strong>Godot 4.7</strong> and developed entirely through GitHub with automated
            builds for <strong>Android (APK)</strong> and <strong>Windows (EXE)</strong>.
            <br><br>
            <strong>🌍 The World — Kumaso City</strong><br>
            A fictional African metropolis inspired by Kumasi, Accra, and Lagos with four distinct zones:
            <br>
            🟢 <strong>Green Zone</strong> — Military safe zone (Low danger)
            <br>
            🟡 <strong>Yellow Zone</strong> — Suburbs, looters, gangs (Medium)
            <br>
            🔴 <strong>Red Zone</strong> — City center, full infestation (High)
            <br>
            ⚫ <strong>Dark Zone</strong> — Night becomes a nightmare (Extreme)
            <br><br>
            <strong>🧟 Zombie Types:</strong> Walker, Screamer, Jumper, Tank, and Former Player
            (when you die online, your character becomes a zombie with your loot)
            <br><br>
            <strong>🎯 Core Features:</strong>
            <br>
            • GTA-style open world with vehicles (cars, motorcycles, helicopters, boats)
            <br>
            • Smart NPC AI with 100+ unique characters, daily schedules, and RDR2-style interactions
            <br>
            • Survival systems — hunger, thirst, sleep, body stats, temperature, infection
            <br>
            • Weapon wheel with attachments, melee combat, ammo types, concealment
            <br>
            • In-game phone — contacts, messages, social media, banking, missions
            <br>
            • Safe houses, customization, barbershops, weapon storage
            <br>
            • Activities — gym, shooting range, street racing, fishing, nightclubs
            <br><br>
            <strong>⚙️ Technical:</strong> Godot 4.7 (mobile renderer) • GDScript • GitHub Actions
            (automated APK on every push) • AI-generated 3D models and PBR textures
            <br><br>
            <strong>🔮 Roadmap:</strong>
            <br>
            ✅ Phase 1 — Core foundation (player movement, zombie AI, safe island, mobile controls)
            <br>
            🔜 Phase 2 — Full city map, vehicles, weapon wheel, police heat system
            <br>
            🔜 Phase 3 — NPC relationships, factions, base building, multiplayer
            <br>
            🔜 Phase 4 — Dynamic weather, radio stations, photo mode, community challenges
        `,
        tech: ["Godot 4.7", "GDScript", "GitHub Actions", "3D Modeling", "Game Design"],
        video: "videos/duskfall-demo.mp4",
        links: [
            { text: "View on GitHub", icon: "fab fa-github", url: "https://github.com/NightShade9842/duskfall", class: "btn-primary" }
        ],
        tabs: [
            {
                name: "Gameplay",
                icon: "fas fa-gamepad",
                screenshots: [
                    "images/duskfall-ss1.jpg",
                    "images/duskfall-ss2.jpg",
                    "images/duskfall-ss3.jpg"
                ]
            },
            {
                name: "Zones",
                icon: "fas fa-map-marked-alt",
                screenshots: [
                    "images/duskfall-ss4.jpg",
                    "images/duskfall-ss5.jpg",
                    "images/duskfall-ss6.jpg"
                ]
            }
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

// Helper: Render slideshow for given screenshots
function renderSlideshow(screenshots) {
    slideshowWrapper.innerHTML = '';
    if (!screenshots || screenshots.length === 0) {
        document.querySelector('.modal-slideshow').style.display = 'none';
        return;
    } else {
        document.querySelector('.modal-slideshow').style.display = 'block';
    }

    screenshots.forEach(src => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `<img src="${src}" alt="Screenshot" />`;
        slideshowWrapper.appendChild(slide);
    });

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
        modalTabs.style.display = 'none';
        return;
    }

    modalTabs.style.display = 'flex';

    project.tabs.forEach((tab, index) => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
        btn.innerHTML = `<i class="${tab.icon}"></i> ${tab.name}`;
        btn.dataset.index = index;

        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
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

    modalTitle.textContent = project.title;
    modalBadge.textContent = project.badge;
    modalDescription.innerHTML = project.description;
    modalTech.innerHTML = project.tech.map(t => `<span>${t}</span>`).join('');

    renderLinks(project);

    if (project.tabs && project.tabs.length > 0) {
        renderTabs(project);
    } else {
        modalTabs.innerHTML = '';
        modalTabs.style.display = 'none';
        renderSlideshow(project.screenshots);
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

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

// Click on card opens modal
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function(e) {
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
// IMAGE LIGHTBOX
// ========================================

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentImageIndex = 0;
let currentImageList = [];

function openLightbox(imageSrc, imageList) {
    currentImageList = imageList || [imageSrc];
    currentImageIndex = currentImageList.indexOf(imageSrc);
    if (currentImageIndex === -1) currentImageIndex = 0;

    lightboxImg.src = currentImageList[currentImageIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentImageList.length;
    lightboxImg.src = currentImageList[currentImageIndex];
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentImageList.length) % currentImageList.length;
    lightboxImg.src = currentImageList[currentImageIndex];
}

if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', showNextImage);
}

if (lightboxPrev) {
    lightboxPrev.addEventListener('click', showPrevImage);
}

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
});

// Attach click handler to slideshow images
document.addEventListener('click', function(e) {
    const img = e.target.closest('.modal-slideshow .swiper-slide img');
    if (img && img.src) {
        const allImages = Array.from(document.querySelectorAll('.modal-slideshow .swiper-slide img'))
            .map(i => i.src);
        openLightbox(img.src, allImages);
    }
});

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
console.log('  🚀 Duskfall - Open-World Zombie Survival RPG');

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