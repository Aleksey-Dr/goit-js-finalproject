// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

createGalleryItems();

function createGalleryItems() {

    const item = galleryItems.map((image) => {
        return `
                    <li>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="${image.original}"
                            aria-label="Image"
                            class="gallery__item"
                        >
                            <img
                                src="${image.preview}"
                                alt="${image.description}"
                                class="gallery__image"
                            />
                        </a>
                    </li>
                `
    }).join("");

    gallery.innerHTML = item;
};

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});