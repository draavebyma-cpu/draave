// ==========================================
// DRAAVEBYMA - COLLECTION PAGE
// Reads the shawl from the link (collection.html?c=booty-shawl)
// and shows its pictures from products.js
// ==========================================


// ==========================================
// 1. WHICH SHAWL DOES THE CUSTOMER WANT?
// ==========================================

const params = new URLSearchParams(window.location.search);
const key = params.get("c") || "women";

const breadcrumbEl = document.getElementById("breadcrumb");
const titleEl = document.getElementById("collectionTitle");
const textEl = document.getElementById("collectionText");
const galleryEl = document.getElementById("gallery");
const moreEl = document.getElementById("moreShawls");

function genderLabel(gender) {

    return gender === "women" ? "Women" : "Men";

}

let pageTitle = "";
let crumbs = "";
let description = "";
let items = [];
let showShawlName = false;

if (key === "all") {

    // Every shawl, women and men together
    pageTitle = "All Shawls";
    crumbs = '<a href="index.html">Home</a> / ' + pageTitle;
    description = "Every shawl we make, for women and men.";
    showShawlName = true;

    Object.keys(collections).forEach(function (id) {

        const shawl = collections[id];

        shawl.images.forEach(function (file, index) {

            items.push({
                shawl: shawl,
                file: file,
                number: index + 1
            });

        });

    });

} else if (key === "women" || key === "men") {

    // All shawls for women, or all shawls for men
    pageTitle = genderLabel(key) + " Shawls";
    crumbs = '<a href="index.html">Home</a> / ' + pageTitle;
    description = "All our shawls for " + genderLabel(key).toLowerCase() + ".";
    showShawlName = true;

    Object.keys(collections).forEach(function (id) {

        const shawl = collections[id];

        if (shawl.gender === key) {

            shawl.images.forEach(function (file, index) {

                items.push({
                    shawl: shawl,
                    file: file,
                    number: index + 1
                });

            });

        }

    });

} else if (collections[key]) {

    // One shawl, for example Booty Shawl
    const shawl = collections[key];

    pageTitle = shawl.name;
    description = shawl.description;

    crumbs =
        '<a href="index.html">Home</a> / ' +
        '<a href="collection.html?c=' + shawl.gender + '">' +
        genderLabel(shawl.gender) + ' Shawls</a> / ' + shawl.name;

    shawl.images.forEach(function (file, index) {

        items.push({
            shawl: shawl,
            file: file,
            number: index + 1
        });

    });

} else {

    pageTitle = "Shawl not found";
    crumbs = '<a href="index.html">Home</a>';
    description = "Please choose a shawl from the list below.";

}

document.title = pageTitle + " | draavebyma";
breadcrumbEl.innerHTML = crumbs;
titleEl.innerText = pageTitle;
textEl.innerText = description;

// Hide the description line if there is nothing to say
textEl.style.display = description ? "" : "none";


// ==========================================
// 2. PICTURE VIEWER (click a picture to enlarge)
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
// 3. BUILD THE PICTURE GRID
// ==========================================

function buildCard(item) {

    const shawl = item.shawl;

    // Where the picture should be saved, for example images/booty-shawl/booty-1.jpg
    const path = encodeURI("images/" + shawl.folder + "/" + item.file);

    const caption = showShawlName
        ? shawl.name + " - Design " + item.number
        : "Design " + item.number;

    const card = document.createElement("div");
    card.className = "gallery-item";

    // Picture
    const photo = document.createElement("div");
    photo.className = "gallery-photo";

    const img = document.createElement("img");
    img.src = path;
    img.alt = shawl.name + " design " + item.number;
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

    // Name and order button
    const info = document.createElement("div");
    info.className = "gallery-info";

    const title = document.createElement("h3");
    title.innerText = caption;

    const button = document.createElement("button");
    button.innerText = "ORDER ON WHATSAPP";

    button.addEventListener("click", function () {

        openWhatsApp(
            "Hello draavebyma! I want to order:\n\n" +
            "Shawl: " + shawl.name + " (" + genderLabel(shawl.gender) + ")\n" +
            "Design: " + item.number + "\n" +
            "Photo: " + item.file + "\n\n" +
            "Please confirm availability."
        );

    });

    info.appendChild(title);
    info.appendChild(button);

    card.appendChild(photo);
    card.appendChild(info);

    return card;

}

if (items.length > 0) {

    items.forEach(function (item) {

        galleryEl.appendChild(buildCard(item));

    });

} else {

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
// 4. "MORE SHAWLS" LINKS AT THE BOTTOM
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
            link.innerText = shawl.name;

            if (id === key) {
                link.className = "active";
            }

            group.appendChild(link);

        }

    });

    moreEl.appendChild(group);

});
