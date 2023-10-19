import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

createGalleryItems();

function createGalleryItems() {
    const items = [];

    for (let i = 0; i < galleryItems.length; i++) {
        const item = document.createElement('div');
        item.classList.add('gallery__item');

        const link = document.createElement('a');
        link.href = galleryItems[i].original;
        // link.rel = "noreferrer noopener";
        link.classList.add('gallery__link');
        item.append(link);

        const image = document.createElement('img');
        link.append(image);
        image.src = galleryItems[i].preview;
        image.alt = galleryItems[i].description;
        image.setAttribute('data-source', galleryItems[i].original);
        // console.log(image.dataset.source);
        image.classList.add('gallery__image');

        items.push(item);
    }

    gallery.append(...items);
};

gallery.addEventListener('click', getBigImage);

let instanceRef;

function getBigImage(event) {
    event.preventDefault();
    const instance =
        basicLightbox.create(`<img width="1400" height="900" src="${event.target.dataset.source}">`,
            {
                onShow: showModal,
                onClose: closeModal,
            });
    
    instance.show();
    instanceRef = instance;
};

function showModal() {
        document.addEventListener('keydown', onEscPress);
};

function closeModal() {
        document.removeEventListener('keydown', onEscPress);
};
    
function onEscPress(event) {
    if (event.key === 'Escape') {
        instanceRef.close();
    }
};