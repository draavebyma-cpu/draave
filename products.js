// ==========================================
// DRAAVEBYMA - SETTINGS AND SHAWL PICTURES
// This is the ONLY file you edit to add or change shawls.
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
//   id           the short name used in the link (collection.html?c=...)
//   gender       "women" or "men"
//   name         the name shown on the page
//   price        the price in PKR (no "Rs." and no commas)
//   folder       the folder inside "images" where its pictures are saved
//   card         the main card picture (the Instagram / Post image)
//   description  one short line shown under the title (can be empty "")
//   images       the other pictures of this shawl, shown under the card
//
// HOW TO ADD A SHAWL
//   1. Put its pictures in:  images/<folder>/
//   2. Add an entry below with the same folder name, its card picture
//      and its other pictures. The file names must match exactly.

const collections = {
    "velvet-mahroon": {
        id: "velvet-mahroon",
        gender: "women",
        name: "Rich Velvet Shawl (Mahroon)",
        price: 3400,
        folder: "velvet-mahroon",
        card: "velvet-mahroon-card.jpg",
        description: "Rich velvet shawl in mahroon with four-sided lace.",
        images: [
            "velvet-mahroon-1.jpg",
            "velvet-mahroon-2.jpg",
        ]
    },

    "velvet-chocolate": {
        id: "velvet-chocolate",
        gender: "women",
        name: "Rich Velvet Shawl (Brown)",
        price: 3400,
        folder: "velvet-chocolate",
        card: "velvet-chocolate-card.jpg",
        description: "Rich velvet shawl in warm brown with four-sided lace.",
        images: [
            "velvet-chocolate-1.jpg",
            "velvet-chocolate-2.jpg",
        ]
    },

    "velvet-dark-blue": {
        id: "velvet-dark-blue",
        gender: "women",
        name: "Rich Velvet Shawl (Blue)",
        price: 3400,
        folder: "velvet-dark-blue",
        card: "velvet-dark-blue-card.jpg",
        description: "Rich velvet shawl in deep blue with four-sided lace.",
        images: [
            "velvet-dark-blue-1.jpg",
            "velvet-dark-blue-2.jpg",
        ]
    },

    "velvet-mungiya": {
        id: "velvet-mungiya",
        gender: "women",
        name: "Rich Velvet Shawl (Mungiya)",
        price: 3400,
        folder: "velvet-mungiya",
        card: "velvet-mungiya-card.jpg",
        description: "Rich velvet shawl in mungiya with four-sided lace.",
        images: [
            "velvet-mungiya-1.jpg",
            "velvet-mungiya-2.jpg",
            "velvet-mungiya-3.jpg",
        ]
    },

    "gulposh-cutwork": {
        id: "gulposh-cutwork",
        gender: "women",
        name: "Gulposh Cutwork Shawl",
        price: 3000,
        folder: "gulposh-cutwork",
        card: "gulposh-cutwork-card.jpg",
        description: "Gulposh cutwork shawl in laser-cut wool.",
        images: [
            "gulposh-cutwork-1.jpg",
            "gulposh-cutwork-2.jpg",
        ]
    },

    "sequence": {
        id: "sequence",
        gender: "women",
        name: "Aureus Sequence Shawl",
        price: 3500,
        folder: "sequence",
        card: "sequence-card.jpg",
        description: "Aureus sequence shawl in 72-wool with shimmering sequins.",
        images: [
            "sequence-1.jpg",
            "sequence-2.jpg",
        ]
    },

    "kani": {
        id: "kani",
        gender: "women",
        name: "Kani Shawl",
        price: 5000,
        folder: "kani",
        card: "kani-card.jpg",
        description: "Kani wool shawl with a woven floral pattern.",
        images: [
            "kani-1.jpg",
            "kani-2.jpg",
        ]
    },

    "multani-karalak": {
        id: "multani-karalak",
        gender: "women",
        name: "Multani Diamond Shawl",
        price: 1990,
        folder: "multani-karalak",
        card: "multani-karalak-card.jpg",
        description: "Multani diamond shawl in soft wool.",
        images: [
            "multani-karalak-1.jpg",
            "multani-karalak-2.jpg",
            "multani-karalak-3.jpg",
        ]
    },

    "booty": {
        id: "booty",
        gender: "women",
        name: "Legacy Booti Shawl",
        price: 4000,
        folder: "booty",
        card: "booty-card.jpg",
        description: "Legacy booti shawl in warm winter wool.",
        images: [
            "booty-1.jpg",
            "booty-2.jpg",
            "booty-3.jpg",
        ]
    },

    "ajrak-siyah": {
        id: "ajrak-siyah",
        gender: "women",
        name: "Ajrak Siya Shawl",
        price: 4500,
        folder: "ajrak-siyah",
        card: "ajrak-siyah-card.jpg",
        description: "Ajrak siya shawl in soft wool.",
        images: [
            "ajrak-siyah-1.jpg",
            "ajrak-siyah-2.jpg",
        ]
    },

    "naqsha-e-zari": {
        id: "naqsha-e-zari",
        gender: "women",
        name: "Naqsha-e-Zari Shawl",
        price: 4000,
        folder: "naqsha-e-zari",
        card: "naqsha-e-zari-card.jpg",
        description: "Naqsha-e-zari shawl, handmade in wool.",
        images: [
            "naqsha-e-zari-1.jpg",
            "naqsha-e-zari-2.jpg",
            "naqsha-e-zari-3.jpg",
        ]
    },

    "sitara-luxe": {
        id: "sitara-luxe",
        gender: "women",
        name: "Sitara Luxe Shawl",
        price: 5200,
        folder: "sitara-luxe",
        card: "sitara-luxe-card.jpg",
        description: "Sitara luxe shawl in premium wool.",
        images: [
            "sitara-luxe-1.jpg",
            "sitara-luxe-2.jpg",
            "sitara-luxe-3.jpg",
        ]
    },

    "regal-drape": {
        id: "regal-drape",
        gender: "men",
        name: "Regal Drape Shawl",
        price: 1990,
        folder: "regal-drape",
        card: "regal-drape-card.jpg",
        description: "Regal drape shawl in soft winter wool.",
        images: [
            "regal-drape-1.jpg",
            "regal-drape-2.jpg",
        ]
    },

    "royal-drape": {
        id: "royal-drape",
        gender: "men",
        name: "Royal Drape Shawl",
        price: 1990,
        folder: "royal-drape",
        card: "royal-drape-card.jpg",
        description: "Royal drape shawl in soft winter wool.",
        images: [
            "royal-drape-1.jpg",
            "royal-drape-2.jpg",
            "royal-drape-3.jpg",
        ]
    },

    "safaid-dastoor": {
        id: "safaid-dastoor",
        gender: "men",
        name: "Safaid Dastoor",
        price: 2500,
        folder: "safaid-dastoor",
        card: "safaid-dastoor-card.jpg",
        description: "Safaid dastoor in warm winter wool.",
        images: [
            "safaid-dastoor-1.jpg",
            "safaid-dastoor-2.jpg",
        ]
    },

    "blanc-dastoor": {
        id: "blanc-dastoor",
        gender: "men",
        name: "Black Dastoor",
        price: 2500,
        folder: "blanc-dastoor",
        card: "blanc-dastoor-card.jpg",
        description: "Black dastoor in warm winter wool.",
        images: [
            "blanc-dastoor-1.jpg",
            "blanc-dastoor-2.jpg",
        ]
    },

    "pearl-semi-luxe": {
        id: "pearl-semi-luxe",
        gender: "men",
        name: "Pearl Semi-Luxe Shawl",
        price: 3450,
        folder: "pearl-semi-luxe",
        card: "pearl-semi-luxe-card.jpg",
        description: "Pearl semi-luxe shawl for men.",
        images: [
            "pearl-semi-luxe-1.jpg",
            "pearl-semi-luxe-2.jpg",
        ]
    },

    "ivory-semi-luxe": {
        id: "ivory-semi-luxe",
        gender: "men",
        name: "Ivory Semi-Luxe Shawl",
        price: 2950,
        folder: "ivory-semi-luxe",
        card: "ivory-semi-luxe-card.jpg",
        description: "Ivory semi-luxe shawl for men.",
        images: [
            "ivory-semi-luxe-1.jpg",
            "ivory-semi-luxe-2.jpg",
            "ivory-semi-luxe-3.jpg",
        ]
    },

    "atabad": {
        id: "atabad",
        gender: "men",
        name: "Pure Wool Atabad",
        price: 2999,
        folder: "atabad",
        card: "atabad-card.jpg",
        description: "Pure wool atabad shawl for men.",
        images: [
            "atabad-1.jpg",
            "atabad-2.jpg",
        ]
    },

    "shangrilla-single": {
        id: "shangrilla-single",
        gender: "men",
        name: "White Shangrilla (Single)",
        price: 4200,
        folder: "shangrilla-single",
        card: "shangrilla-single-card.jpg",
        description: "White shangrilla shawl, single layer.",
        images: [
            "shangrilla-single-1.jpg",
            "shangrilla-single-2.jpg",
        ]
    },

    "shangrilla-double": {
        id: "shangrilla-double",
        gender: "men",
        name: "White Shangrilla (Double)",
        price: 5000,
        folder: "shangrilla-double",
        card: "shangrilla-double-card.jpg",
        description: "White shangrilla shawl, double layer.",
        images: [
            "shangrilla-double-1.jpg",
            "shangrilla-double-2.jpg",
        ]
    },

    "shangrilla-black": {
        id: "shangrilla-black",
        gender: "men",
        name: "Black Shangrilla (Double)",
        price: 5000,
        folder: "shangrilla-black",
        card: "shangrilla-black-card.jpg",
        description: "Black shangrilla shawl, double layer.",
        images: [
            "shangrilla-black-1.jpg",
            "shangrilla-black-2.jpg",
            "shangrilla-black-3.jpg",
        ]
    },

    "monarch-96": {
        id: "monarch-96",
        gender: "men",
        name: "Monarch 96 Shawl",
        price: 6000,
        folder: "monarch-96",
        card: "monarch-96-card.jpg",
        description: "Monarch 96 doraless wool shawl in jet black.",
        images: [
            "monarch-96-1.jpg",
            "monarch-96-2.jpg",
        ]
    },

    "babus-blue": {
        id: "babus-blue",
        gender: "men",
        name: "Blue Babusar Shawl",
        price: 2450,
        folder: "babus-blue",
        card: "babus-blue-card.jpg",
        description: "Blue babusar shawl with a 3 border.",
        images: [
            "babus-blue-1.jpg",
            "babus-blue-2.jpg",
            "babus-blue-3.jpg",
        ]
    },

    "babus-black": {
        id: "babus-black",
        gender: "men",
        name: "Black Babusar Shawl",
        price: 2450,
        folder: "babus-black",
        card: "babus-black-card.jpg",
        description: "Black babusar shawl with a 3 border.",
        images: [
            "babus-black-1.jpg",
            "babus-black-2.jpg",
            "babus-black-3.jpg",
        ]
    },

    "swati-black": {
        id: "swati-black",
        gender: "men",
        name: "Swati Thandyani Wool (Black)",
        price: 7000,
        folder: "swati-black",
        card: "swati-black-card.jpg",
        description: "Swati thandyani wool shawl in black.",
        images: [
            "swati-black-1.jpg",
            "swati-black-2.jpg",
        ]
    },

    "swati-offwhite": {
        id: "swati-offwhite",
        gender: "men",
        name: "Swati Thandyani Wool (Off White)",
        price: 7000,
        folder: "swati-offwhite",
        card: "swati-offwhite-card.jpg",
        description: "Swati thandyani wool shawl in off white.",
        images: [
            "swati-offwhite-1.jpg",
            "swati-offwhite-2.jpg",
        ]
    },

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
