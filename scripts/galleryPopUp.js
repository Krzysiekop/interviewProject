const galleryPhotos = document.querySelectorAll(".gallery-item");
const gallery = document.querySelector(".galery_pop_up");
const overlay = document.querySelector(".overlay");
const closeGallery = document.querySelector(".galery_pop_up--close");
const previousImageButton = document.querySelector(".galery_pop_up--previous");
const nextImageButton = document.querySelector(".galery_pop_up--next");
const popUpImage = document.querySelector(".galery_pop_up--image");

galleryPhotos.forEach((galleryPhoto, index) => {
  galleryPhoto.addEventListener("click", function () {
    gallery.style.display = "block";
    overlay.style.display = "block";
  });
});

closeGallery.addEventListener("click", function () {
  gallery.style.display = "none";
  overlay.style.display = "none";
});

let index2 = 1;

nextImageButton.addEventListener("click", function () {
  if (index2 === 9) {
   
  } else {
    index2++;
    popUpImage.style.content = `url("img/gallery/${index2}.jpg")`;
  }
});

previousImageButton.addEventListener("click", function () {
  if (index2 === 1) {
   
  } else {
    index2--;
    popUpImage.style.content = `url("img/gallery/${index2}.jpg")`;
  }
});
