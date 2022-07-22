import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const galleryEl = galleryItems.map((item) => `<div class="gallery__item"><a class="gallery__link" href="${item.original}">
<img class="gallery__img" src="${item.preview}" data-source="${item.original}" alt="${item.description}"></a></div>`).join("");
gallery.insertAdjacentHTML('beforeend', galleryEl)

gallery.addEventListener("click", onClick);

function onClick(evt) {
    
    if (!evt.target.classList.contains("gallery__img")) {
        evt.preventDefault()
    }
    const instance = basicLightBox.create(`<img src="${evt.target.dataset.source}">`)
    instance.show();
}