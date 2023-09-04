function displayCarousel(href, parent) {
  const $carouselWrapper = document.getElementById("carousel_modal");
  $carouselWrapper.style.display = "block";
  document.body.classList.add("modal-open");

  const carousel = new Carousel(href);
  parent.appendChild(carousel.render());
}

function closeCarousel() {
  const $carousel = document.getElementById("carousel_modal");
  $carousel.style.display = "none";
  document.body.classList.remove("modal-open");
}
