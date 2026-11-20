# draave

Online shop for **draavebyma** shawls.

Plain static website - HTML, CSS and JavaScript. No build step, no server needed.

## Pages

- `index.html` - home page
- `collection.html` - all shawls (Men / Women collections)
- `velvet.html`, `kani.html`, `sequence.html` - single shawl pages
- `CSS/` - stylesheets
- `JS/` - scripts
- `images/` - product pictures, one folder per shawl

## Adding pictures (shop owner)

1. Put the picture file inside its shawl folder, for example `images/velvet-shawl/`.
2. Open `products.js` and find that shawl's `images:` list.
3. Add the file name **exactly** as it is on disk (same spelling, same extension).

The file name in `products.js` must match the file name in the images folder, otherwise the picture will not show.

## Product photos

The pictures in `images/` are the real shawls. Do not regenerate or alter the fabric, pattern, print or colour - customers receive exactly what is photographed.

`images/_originals_png/` keeps the untouched master copies of the original photos.

## Notes

- `style.css` is intentionally empty and must not be replaced. The live theme is `theme.css`.
- `READ-ME-FIRST.txt` has the quick setup notes.
