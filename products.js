// ==========================================
// DRAAVEBYMA - SETTINGS AND SHAWL PICTURES
// This is the ONLY file you edit to add pictures.
// ==========================================


// ==========================================
// 1. YOUR WHATSAPP NUMBER (change it only here)
// ==========================================

// Country code + number, no + sign, no spaces, no leading 0
// Example: +92 325 3113232  ->  923253113232
const whatsappNumber = "923253113232";


// ==========================================
// 2. YOUR SHAWLS AND THEIR PICTURES
// ==========================================
//
// Each shawl has:
//   gender       "women" or "men"
//   name         the name shown on the page
//   folder       the folder inside "images" where its pictures are saved
//   description  one short line shown under the title (can be empty "")
//   images       the file names of the pictures, inside that folder
//
// HOW TO ADD A PICTURE
//   1. Save the picture in:  images/<folder>/
//      Example:              images/booty-shawl/booty-4.jpg
//   2. Add its name to the images list, with a comma after the one before:
//      images: ["booty-1.jpg", "booty-2.jpg", "booty-3.jpg", "booty-4.jpg"]
//
// The file name here must be EXACTLY the same as the saved file
// (small and capital letters count, and the .jpg / .png ending too).

const collections = {

    // ---------------- WOMEN ----------------

    "booty-shawl": {
        gender: "women",
        name: "Booty Shawl",
        folder: "booty-shawl",
        description: "Elegant booty shawls for women.",
        images: []
    },

    "sequence-shawl": {
        gender: "women",
        name: "Sequence Shawl",
        folder: "sequence-shawl",
        description: "",
        images: ["sequence-1.jpg", "sequence-2.jpg"]
    },

    "sindhi-shawl": {
        gender: "women",
        name: "Sindhi Shawl",
        folder: "sindhi-shawl",
        description: "",
        images: []
    },

    "velvet-shawl": {
        gender: "women",
        name: "Velvet Shawl",
        folder: "velvet-shawl",
        description: "",
        images: ["velvet-1.jpg", "velvet-2.jpg"]
    },

    "kani-shawl": {
        gender: "women",
        name: "Kani Shawl",
        folder: "kani-shawl",
        description: "",
        images: ["kani-1.jpg", "kani-2.jpg"]
    },

    // ---------------- MEN ----------------

    "shangriila-shawl": {
        gender: "men",
        name: "Shangriila Shawl",
        folder: "shangriila-shawl",
        description: "",
        images: []
    },

    "atabad-shawl": {
        gender: "men",
        name: "Atabad Shawl",
        folder: "atabad-shawl",
        description: "",
        images: []
    },

    "96-shawl": {
        gender: "men",
        name: "96 Shawl",
        folder: "96-shawl",
        description: "",
        images: []
    },

    "babus-shawl": {
        gender: "men",
        name: "Babus Shawl",
        folder: "babus-shawl",
        description: "",
        images: []
    }

};


// ==========================================
// 3. WHATSAPP HELPERS (no need to edit)
// ==========================================

function openWhatsApp(message) {

    let url = "https://wa.me/" + whatsappNumber;

    if (message) {
        url += "?text=" + encodeURIComponent(message);
    }

    window.open(url, "_blank");

}

// Every link marked data-whatsapp opens your chat
function setupWhatsAppLinks() {

    document.querySelectorAll("[data-whatsapp]").forEach(function (link) {

        link.href = "https://wa.me/" + whatsappNumber;

    });

}

setupWhatsAppLinks();
