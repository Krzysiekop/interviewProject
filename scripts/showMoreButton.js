const shoMoreButton = document.querySelector(".gradient__off");
const gradient = document.querySelector(".gradient");
const showAllGallery = document.querySelector('.showMore')



shoMoreButton.addEventListener('click', function () {
    shoMoreButton.style.display ='none'
    gradient.style.display ='none'
    showAllGallery.style.height ='auto'
    showAllGallery.style.overflow ='visible'
    
})