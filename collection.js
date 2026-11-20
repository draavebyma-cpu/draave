// ==========================================
// DRAAVEBYMA - COLLECTION PAGE
//
//   collection.html?c=women  /  ?c=men  /  ?c=all
//       -> a card for every shawl, using its main card picture
//
//   collection.html?c=<shawl id>
//       -> the shawl's main card picture with all its other
//          pictures shown underneath it
//
// Everything is read from products.js
// ==========================================


// ==========================================
// 1. WHICH SHAWL DOES THE CUSTOMER WANT?
// ==========================================

const params = new URLSearchParams(window.location.search);
const key = params.get("c") || "all";

const breadcrumbEl = document.getElementById("breadcrumb");
const titleEl = document.getElementById("collectionTitle");
const textEl = document.getElementById("collectionText");
const galleryEl = document.getElementById("gallery");
const moreEl = document.getElementById("moreShawls");

function genderLabel(gender) {

    return gender === "women" ? "Women" : "Men";

}

// 3400 -> "3,400"
function formatPrice(price) {

    return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}

function priceText(price) {

    return "Rs. " + formatPrice(price);

}

function shawlImagePath(shawl, file) {

    return encodeURI("images/" + shawl.folder + "/" + file);

}


// ==========================================
// 2. WHAT SHOULD THE PAGE SHOW?
// ==========================================

let pageTitle = "";
let crumbs = "";
let description = "";
let shawls = [];
let single = null;

if (key === "all") {

    pageTitle = "All Shawls";
    crumbs = '<a href="index.html">Home</a> / ' + pageTitle;
    description = "Every shawl we make, for women and men.";

} else if (key === "women" || key === "men") {

    pageTitle = genderLabel(key) + " Shawls";
    crumbs = '<a href="index.html">Home</a> / ' + pageTitle;
    description = "All our " + genderLabel(key).toLowerCase() + " shawls, ready to order.";

}

if (key === "all" || key === "women" || key === "men") {

    // The catalogue: one card per shawl
    Object.keys(collections).forEach(function (id) {

        const shawl = collections[id];

        if (key === "all" || shawl.gender === key) {
            shawls.push(shawl);
        }

    });

} else if (collections[key]) {

    // One shawl, for example Rich Velvet Shawl (Mahroon)
    single = collections[key];

    pageTitle = single.name;
    description = single.description;

    crumbs =
        '<a href="index.html">Home</a> / ' +
        '<a href="collection.html?c=' + single.gender + '">' +
        genderLabel(single.gender) + ' Shawls</a> / ' + single.name;

}

document.title = pageTitle + " | draavebyma";
breadcrumbEl.innerHTML = crumbs;
titleEl.innerText = pageTitle;
textEl.innerText = description;

// Hide the description line if there is nothing to say
textEl.style.display = description ? "" : "none";


// ==========================================
// 3. PICTURE VIEWER (click a picture to enlarge)
// ==========================================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(src, alt) {

    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add("open");

}

function closeLightbox() {

    lightbox.classList.remove("open");
    lightboxImg.src = "";

}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", function (event) {

    // Close when the dark area around the picture is clicked
    if (event.target === lightbox) {
        closeLightbox();
    }

});

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeLightbox();
    }

});


// ==========================================
// 4. ORDERING ON WHATSAPP
// ==========================================

function orderButton(shawl, extra) {

    const button = document.createElement("button");
    button.innerText = "ORDER ON WHATSAPP";

    button.addEventListener("click", function () {

        openWhatsApp(
            "Hello draavebyma! I want to order:\n\n" +
            "Shawl: " + shawl.name + " (" + genderLabel(shawl.gender) + ")\n" +
            "Price: " + priceText(shawl.price) + "\n" +
            (extra || "") +
            "\nPlease confirm availability."
        );

    });

    return button;

}


// ==========================================
// 5. THE CATALOGUE (women / men / all)
// ==========================================

function buildProductCard(shawl) {

    const card = document.createElement("div");
    card.className = "product-card";

    // The main card picture
    const photo = document.createElement("div");
    photo.className = "product-photo";

    const img = document.createElement("img");
    img.src = shawlImagePath(shawl, shawl.card);
    img.alt = shawl.name;
    img.loading = "lazy";

    photo.addEventListener("click", function () {
        openLightbox(img.src, img.alt);
    });

    photo.appendChild(img);
    card.appendChild(photo);

    // Name, price and buttons
    const info = document.createElement("div");
    info.className = "product-info";

    const title = document.createElement("h3");
    title.innerText = shawl.name;

    const price = document.createElement("p");
    price.className = "product-price";
    price.innerText = priceText(shawl.price);

    const details = document.createElement("a");
    details.className = "product-details";
    details.href = "collection.html?c=" + shawl.id;
    details.innerText = "VIEW DETAILS";

    info.appendChild(title);
    info.appendChild(price);
    info.appendChild(details);
    info.appendChild(orderButton(shawl));

    card.appendChild(info);

    return card;

}

if (shawls.length > 0) {

    const grid = document.createElement("div");
    grid.className = "product-grid";

    shawls.forEach(function (shawl) {

        grid.appendChild(buildProductCard(shawl));

    });

    galleryEl.appendChild(grid);

}


// ==========================================
// 6. ONE SHAWL (its card picture, then its other pictures)
// ==========================================

function buildPhotoCard(shawl, file, number) {

    const card = document.createElement("div");
    card.className = "gallery-item";

    const path = shawlImagePath(shawl, file);

    const photo = document.createElement("div");
    photo.className = "gallery-photo";

    const img = document.createElement("img");
    img.src = path;
    img.alt = shawl.name + " photo " + number;
    img.loading = "lazy";

    // If the picture file is not found, show where to save it
    img.addEventListener("error", function () {

        photo.innerHTML = "";
        photo.classList.add("missing");

        const message = document.createElement("div");
        message.className = "gallery-missing";
        message.innerText = "Save your picture here:\n" + decodeURI(path);

        photo.appendChild(message);

    });

    photo.addEventListener("click", function () {

        if (!photo.classList.contains("missing")) {
            openLightbox(path, img.alt);
        }

    });

    photo.appendChild(img);
    card.appendChild(photo);

    const info = document.createElement("div");
    info.className = "gallery-info";

    const title = document.createElement("h3");
    title.innerText = "Photo " + number;

    info.appendChild(title);
    info.appendChild(orderButton(shawl, "Photo: " + file + "\n"));

    card.appendChild(info);

    return card;

}

if (single) {

    // The main card picture, big, at the top
    const hero = document.createElement("div");
    hero.className = "product-hero";

    const heroImg = document.createElement("img");
    heroImg.src = shawlImagePath(single, single.card);
    heroImg.alt = single.name;

    hero.addEventListener("click", function () {
        openLightbox(heroImg.src, heroImg.alt);
    });

    hero.appendChild(heroImg);
    galleryEl.appendChild(hero);

    // Name, price and the order button
    const buy = document.createElement("div");
    buy.className = "product-buy";

    const buyTitle = document.createElement("h2");
    buyTitle.innerText = single.name;

    const buyPrice = document.createElement("p");
    buyPrice.className = "product-price";
    buyPrice.innerText = priceText(single.price);

    buy.appendChild(buyTitle);
    buy.appendChild(buyPrice);
    buy.appendChild(orderButton(single));
    galleryEl.appendChild(buy);

    // The other pictures, under the card picture
    const sub = document.createElement("h2");
    sub.className = "product-subtitle";
    sub.innerText = "All photos";
    galleryEl.appendChild(sub);

    const photos = document.createElement("div");
    photos.className = "gallery product-photos";

    single.images.forEach(function (file, index) {

        photos.appendChild(buildPhotoCard(single, file, index + 1));

    });

    galleryEl.appendChild(photos);

} else if (shawls.length === 0) {

    // No pictures yet
    galleryEl.classList.add("empty");

    const empty = document.createElement("div");
    empty.className = "no-products";
    empty.style.display = "block";
    empty.innerHTML =
        "<p>New designs are coming soon. Message us on WhatsApp to see what is available.</p>" +
        '<a href="#" data-whatsapp target="_blank" rel="noopener">ASK ON WHATSAPP</a>';

    galleryEl.appendChild(empty);

    // Make the new WhatsApp link work
    setupWhatsAppLinks();

}


// ==========================================
// 7. "MORE SHAWLS" LINKS AT THE BOTTOM
// ==========================================

["women", "men"].forEach(function (gender) {

    const group = document.createElement("div");
    group.className = "more-group";

    const heading = document.createElement("h3");
    heading.innerText = genderLabel(gender) + " Shawls";
    group.appendChild(heading);

    Object.keys(collections).forEach(function (id) {

        const shawl = collections[id];

        if (shawl.gender === gender) {

            const link = document.createElement("a");
            link.href = "collection.html?c=" + id;
            link.innerText = shawl.name + " - " + priceText(shawl.price);

            if (id === key) {
                link.className = "active";
            }

            group.appendChild(link);

        }

    });

    moreEl.appendChild(group);

});
