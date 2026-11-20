// ==========================================
// DRAAVEBYMA WEBSITE - HOME PAGE JAVASCRIPT
// (your WhatsApp number and shawl pictures are in products.js)
// ==========================================


// ==========================================
// 1. SIDE MENU (open / close)
// ==========================================

const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const menuBack = document.getElementById("menuBack");
const menuTitle = document.getElementById("menuTitle");
const menuPanels = document.querySelectorAll(".menu-panel");

// Titles shown at the top of each menu level
const panelTitles = {
    "main": "Shop",
    "shawls": "Shawls",
    "women-shawls": "Women Shawls",
    "men-shawls": "Men Shawls"
};

// Remembers where the customer has been, so Back works
let panelHistory = ["main"];

function showPanel(name) {

    menuPanels.forEach(function (panel) {
        panel.classList.toggle("active", panel.dataset.panel === name);
    });

    menuTitle.innerText = panelTitles[name] || "Shop";

    // Show the back arrow only after the first level
    menuBack.classList.toggle("show", panelHistory.length > 1);

}

function openMenu() {

    sideMenu.classList.add("open");
    menuOverlay.classList.add("open");

}

function closeMenu() {

    sideMenu.classList.remove("open");
    menuOverlay.classList.remove("open");

    // Next time the menu opens, start from the beginning
    panelHistory = ["main"];
    showPanel("main");

}

if (menuOpen) menuOpen.addEventListener("click", openMenu);
if (menuClose) menuClose.addEventListener("click", closeMenu);
if (menuOverlay) menuOverlay.addEventListener("click", closeMenu);

// Close with the Escape key
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeMenu();
    }

});

// Go deeper: Shop -> Shawls -> Women / Men
document.querySelectorAll("[data-go]").forEach(function (button) {

    button.addEventListener("click", function () {

        panelHistory.push(button.dataset.go);
        showPanel(button.dataset.go);

    });

});

// Go back one level
menuBack.addEventListener("click", function () {

    if (panelHistory.length > 1) {
        panelHistory.pop();
        showPanel(panelHistory[panelHistory.length - 1]);
    }

});

// Open the new page with pictures, for example Booty Shawl
document.querySelectorAll("[data-link]").forEach(function (button) {

    button.addEventListener("click", function () {

        window.location.href = button.dataset.link;

    });

});


// ==========================================
// 3. NEWSLETTER
// ==========================================

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const emailInput = newsletterForm.querySelector("input");
        const email = emailInput.value.trim();

        if (email === "") {
            alert("Please enter your email address.");
            return;
        }

        alert("Thank you for subscribing!");

        emailInput.value = "";

    });

}


// ==========================================
// 4. CHECK JAVASCRIPT
// ==========================================

console.log("JavaScript is connected successfully!");
