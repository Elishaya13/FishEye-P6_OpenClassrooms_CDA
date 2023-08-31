function displayCarousel(image) {
  const $carouselWrapper = document.getElementById("carousel_modal");
  $carouselWrapper.style.display = "block";
  document.body.classList.add("modal-open");
  const imageId = image;
  console.log(imageId);
}

function closeCarousel() {
  const $carousel = document.getElementById("carousel_modal");
  $carousel.style.display = "none";
  document.body.classList.remove("modal-open");
}
