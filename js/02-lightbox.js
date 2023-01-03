import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery")
const galleryMarkup = createGallery(galleryItems)

galleryContainer.addEventListener(`click`, handlerImg)
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

function createGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image"
         src="${preview}"
         alt="${description}" />
      </a>`
    }).join("")
    }

function handlerImg(evt) {
        evt.preventDefault()
    
       if(!evt.target.classList.contains("gallery__image")){
        return;
       }
       const gallery = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: "alt",
        captionDelay: 250,
    });
    }


