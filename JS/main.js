// ==========================================
// DRAAVEBYMA WEBSITE - JAVASCRIPT
// ==========================================


// ==========================================
// 1. WHATSAPP SETTINGS
// ==========================================

// Your number: country code + number, no + sign, no spaces, no leading 0
// Example: 0300 1234567  ->  923001234567
const whatsappNumber = "923001234567";

function openWhatsApp(message) {

    const url =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");

}


// ==========================================
// 2. ORDER ON WHATSAPP BUTTON
// ==========================================

const orderButtons = document.querySelectorAll(".add-cart-btn");

orderButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productCard = button.closest(".product-card");

        const productName = productCard.querySelector("h3").innerText;
        const priceElement = productCard.querySelector(".price");
        const forWho = productCard.dataset.gender === "women" ? "Women" : "Men";

        let message =
            "Hello Draavebyma! I want to order:\n\n" +
            "Product: " + productName + " (" + forWho + ")\n";

        // Only add the price if the product has one
        if (priceElement) {
            message += "Price: " + priceElement.innerText + "\n";
        }

        message += "\nPlease confirm availability.";

        openWhatsApp(message);

    });

});


// ==========================================
// 3. SIDE MENU (open / close)
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

// Category cards open the matching side-menu collection
document.querySelectorAll("[data-open-panel]").forEach(function (trigger) {

    trigger.addEventListener("click", function () {

        const panel = trigger.dataset.openPanel;
        panelHistory = ["main", "shawls", panel];
        showPanel(panel);
        openMenu();

    });

});

// Go back one level
menuBack.addEventListener("click", function () {

    if (panelHistory.length > 1) {
        panelHistory.pop();
        showPanel(panelHistory[panelHistory.length - 1]);
    }

});


// ==========================================
// 4. FILTER PRODUCTS (Women / Men + shawl name)
// ==========================================

const productCards = document.querySelectorAll(".product-card");
const filterText = document.getElementById("filterText");
const noProducts = document.getElementById("noProducts");

function filterProducts(gender, name) {

    let shown = 0;

    productCards.forEach(function (card) {

        const cardName = card.querySelector("h3").innerText.trim();

        const genderMatch = gender === "all" || card.dataset.gender === gender;
        const nameMatch = name === "all" || cardName === name;

        if (genderMatch && nameMatch) {
            card.style.display = "";
            shown += 1;
        } else {
            card.style.display = "none";
        }

    });

    // Text above the products
    if (filterText) {

        const parts = [];

        if (gender !== "all") {
            parts.push(gender === "women" ? "Women" : "Men");
        }

        if (name !== "all") {
            parts.push(name);
        }

        filterText.innerText =
            "Showing: " + (parts.length ? parts.join(" - ") : "All Products");

    }

    // Message when nothing matches
    if (noProducts) {
        noProducts.style.display = shown === 0 ? "block" : "none";
    }

    // Close the menu and go to the products
    closeMenu();

    const productsSection = document.getElementById("products");

    if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth" });
    }

}

// If there are no products yet, show the "coming soon" message
if (noProducts && productCards.length === 0) {
    noProducts.style.display = "block";
}

// Everything with the class js-filter: menu names, category cards, Show All
document.querySelectorAll(".js-filter").forEach(function (trigger) {

    trigger.addEventListener("click", function (event) {

        event.preventDefault();

        filterProducts(trigger.dataset.gender, trigger.dataset.name);

    });

});


// ==========================================
// 5. SEARCH BUTTON (sends search to WhatsApp)
// ==========================================

const searchButton = document.querySelector(".search-btn");

if (searchButton) {

    searchButton.addEventListener("click", function () {

        const searchText = prompt("What are you looking for?");

        if (searchText) {
            openWhatsApp("Hello Draavebyma! I am looking for: " + searchText);
        }

    });

}


// ==========================================
// 6. NEWSLETTER
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
// 7. CHECK JAVASCRIPT
// ==========================================

console.log("JavaScript is connected successfully!");