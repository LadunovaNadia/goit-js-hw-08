
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';


const galleryList = document.querySelector('.gallery');

function createGalleryMarkup(item) {
   return `
      <li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
               <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
            </a>
      </li>
   `;
}
const galleryMarkup = galleryItems.map(item => createGalleryMarkup(item)).join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

galleryList.addEventListener('click', (event) => {
   event.preventDefault();

   if (event.target.tagName === 'IMG') {
      const largeImageUrl = event.target.dataset.source;

      const lightbox = new SimpleLightbox(largeImageUrl);
      lightbox.show();
   }
});
