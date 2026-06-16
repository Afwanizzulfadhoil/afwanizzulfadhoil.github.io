// Projects Data
const projectsData = [
    {
        id: "project-diary",
        title: "Personal Diary",
        tags: ["School Project", "Web Dev"],
        image: "/assets/img/Personal-diary.png",
        description: "A secure and structured personal diary application created as a school assignment. It provides a neat interface to document daily thoughts, reflections, and milestones with a clean visual timeline.",
        tech: ["HTML5", "CSS3", "Vanilla JS", "Local Storage"],
        github: "https://github.com/AfwanIzzulFadhoil",
        demo: "#"
    },
    {
        id: "project-fadoirupedia",
        title: "Fadoiru Pedia",
        tags: ["School Project", "Movie Database"],
        image: "/assets/img/Fadoiru-pedia.png",
        description: "An interactive movie catalog website that lists favorite films. Users can browse, search, and view summary details for selected movies. Built to demonstrate structured layout design and dynamic content injection.",
        tech: ["HTML5", "CSS3", "JavaScript", "REST APIs"],
        github: "https://github.com/AfwanIzzulFadhoil",
        demo: "#"
    },
    {
        id: "project-bucketlist",
        title: "Bucket List",
        tags: ["School Project", "Utility App"],
        image: "/assets/img/Bucketslist.png",
        description: "A clean minimalist goal-tracking web application. Users can record, manage, and tick off lifetime dreams, target milestones, and academic plans, encouraging personal productivity and organization.",
        tech: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
        github: "https://github.com/AfwanIzzulFadhoil",
        demo: "#"
    }
];

// Document Ready
document.addEventListener("DOMContentLoaded", () => {
    // 1. Loading Screen Hide
    const loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = "0";
            setTimeout(() => {
                loadingScreen.style.display = "none";
            }, 500);
        }, 600);
    }

    // 2. Theme Switching Logic
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");

    // Initialize Theme
    if (currentTheme === "light") {
        document.body.classList.add("light-theme");
    } else if (!currentTheme) {
        // Fallback to OS preference (default dark)
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
            document.body.classList.add("light-theme");
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    }

    // Toggle click handler
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");
            let theme = "dark";
            if (document.body.classList.contains("light-theme")) {
                theme = "light";
            }
            localStorage.setItem("theme", theme);
        });
    }

    // 3. Smooth scrolling for Navigation
    document.querySelectorAll("a.nav-link").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const hrefAttr = this.getAttribute("href");
            if (hrefAttr.startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(hrefAttr);
                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // 4. Slide-out Project Detail Panel Logic
    const backdrop = document.getElementById("panel-backdrop");
    const panel = document.getElementById("detail-panel");
    const closeBtn = document.getElementById("close-panel");
    const panelContent = document.getElementById("panel-content");

    const openProjectPanel = (projectId) => {
        const project = projectsData.find(p => p.id === projectId);
        if (!project) return;

        // Populate panel HTML
        panelContent.innerHTML = `
            <img class="panel-img" src="${project.image}" alt="${project.title}">
            <h3 class="panel-title">${project.title}</h3>
            
            <div class="panel-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
            </div>
            
            <h4 class="panel-section-title">Overview</h4>
            <p class="panel-desc">${project.description}</p>
            
            <h4 class="panel-section-title">Technologies Used</h4>
            <div class="panel-tech-list">
                ${project.tech.map(t => `<span class="panel-tech-badge">${t}</span>`).join("")}
            </div>
            
            <div class="panel-links">
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                    Source Code
                </a>
                ${project.demo !== "#" ? `
                <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                    Live Demo
                </a>
                ` : ''}
            </div>
        `;

        // Activate views
        backdrop.classList.add("active");
        panel.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent background scroll
    };

    const closeProjectPanel = () => {
        backdrop.classList.remove("active");
        panel.classList.remove("active");
        document.body.style.overflow = ""; // Restore scroll
    };

    // Bind card clicks
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("click", () => {
            const projectId = card.getAttribute("data-project-id");
            openProjectPanel(projectId);
        });
    });

    // Close bindings
    if (closeBtn) closeBtn.addEventListener("click", closeProjectPanel);
    if (backdrop) backdrop.addEventListener("click", closeProjectPanel);

    // Escape key closes panel
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeProjectPanel();
    });

    // 5. Profile Picture Light-box
    const profileImg = document.getElementById("profile-img");
    const profileModal = document.getElementById("profile-modal");
    const profileModalClose = document.getElementById("profile-modal-close");

    if (profileImg && profileModal) {
        profileImg.addEventListener("click", () => {
            profileModal.classList.add("active");
            document.body.style.overflow = "hidden";
        });

        const closeProfileModal = () => {
            profileModal.classList.remove("active");
            if (!panel.classList.contains("active")) {
                document.body.style.overflow = "";
            }
        };

        if (profileModalClose) {
            profileModalClose.addEventListener("click", closeProfileModal);
        }
        profileModal.addEventListener("click", (e) => {
            if (e.target === profileModal) {
                closeProfileModal();
            }
        });
    }

    // 6. Navigation Link Active Highlighting on Scroll
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("a.nav-link");

    window.addEventListener("scroll", () => {
        let currentSection = "";
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    // 7. Scroll Reveal Animation
    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
});
