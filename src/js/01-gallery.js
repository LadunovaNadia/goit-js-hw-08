
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"; 
import { galleryItems } from './gallery-items.js';


const galleryList = document.querySelector('.gallery');

function createGalleryMarkup(item) {
   return `
      <li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
               <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
            </a>
      </li>
   `;
}

const galleryMarkup = galleryItems.map(item => createGalleryMarkup(item)).join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
   captionsData: 'alt',
   captionPosition: 'bottom',
});

galleryList.addEventListener('click', (event) => {
   event.preventDefault();
   lightbox.open();
});
