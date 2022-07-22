import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const galleryEl = galleryItems.map((item) => `<div class="gallery__item"><a class="gallery__link" href="${item.original}">
<img class="gallery__img" src="${item.preview}" data-source="${item.original}" alt="${item.description}"></a></div>`).join("");
gallery.insertAdjacentHTML('beforeend', galleryEl)

const box = new SimpleLightbox(".gallery__link", {
    captionsData: "alt",
    captionDelay: 250
});