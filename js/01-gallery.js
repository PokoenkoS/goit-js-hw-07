import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery")

const galleryMarkup = createGallery(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)


galleryContainer.addEventListener(`click`, handlerImg)



function createGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join("")
}

function handlerImg(evt) {
    evt.preventDefault()

   if(!evt.target.classList.contains("gallery__image")){
    return;
   } const instance = basicLightbox.create(`
   <img src="${evt.target.dataset.source}">
`)
 
   instance.show()
   
}

// window.addEventListener(`keydown`, onEscKeyPress)

// function onEscKeyPress(evt) {
// if(evt.code ==='Escape'){
   
// basicLightbox.instance.close()
// console.log(evt.code);
// }
// }


