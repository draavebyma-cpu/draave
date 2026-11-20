// ==========================================
// DRAAVEBYMA - GLASS HEADER + SMOOTH ANIMATIONS
// ==========================================


// ==========================================
// 1. DENSER GLASS HEADER AFTER SCROLLING
// ==========================================

const glassHeader = document.querySelector("header");

if (glassHeader) {

    const updateGlassHeader = function () {
        glassHeader.classList.toggle("scrolled", window.scrollY > 12);
    };

    updateGlassHeader();

    window.addEventListener("scroll", updateGlassHeader, { passive: true });

}


// ==========================================
// 2. FADE IN THE BLOCKS AS THEY COME INTO VIEW
// The "reveal" class is added here, so the page still
// shows everything if JavaScript is switched off.
// ==========================================

const revealTargets = document.querySelectorAll(
    ".section-heading, .category-card, .feature, .newsletter-content, .product-card"
);

if ("IntersectionObserver" in window && revealTargets.length > 0) {

    revealTargets.forEach(function (element) {

        element.classList.add("reveal");

        // Stagger the cards so they do not all appear at once
        const siblings = element.parentElement ? element.parentElement.children : [];
        const position = Array.prototype.indexOf.call(siblings, element);
        const delay = Math.min(position * 90, 270);

        if (delay > 0) {
            element.style.transitionDelay = delay + "ms";
        }

    });

    const revealObserver = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("is-visible");

            // Drop the stagger delay once it has shown, so hover stays snappy
            entry.target.addEventListener("transitionend", function () {
                entry.target.style.transitionDelay = "0ms";
            }, { once: true });

            revealObserver.unobserve(entry.target);

        });

    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });

    revealTargets.forEach(function (element) {
        revealObserver.observe(element);
    });

    // Safety net: never leave anything hidden
    setTimeout(function () {

        revealTargets.forEach(function (element) {
            element.classList.add("is-visible");
        });

    }, 4000);

}
