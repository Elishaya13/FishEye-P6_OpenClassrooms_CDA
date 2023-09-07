let carouselInstance;

/**
 * Handles the keyup event for the carousel.
 * @param {KeyboardEvent} e
 * @return {void}
 */
function onKeyUp(e) {
  if (e.key === "Escape") {
    closeCarousel();
  } else if (e.key === "ArrowLeft") {
    carouselInstance.showPreviousImage(e);
  } else if (e.key === "ArrowRight") {
    carouselInstance.showNextImage(e);
  }
}

/**
 * Displays a carousel modal with the specified content.
 *
 * @param {string} href - Path of the media.
 * @param {string} title - Title of the media.
 * @param {HTMLElement} parent - Parent element to append the carousel to.
 * @param {string[]} gallery - Carousel media paths.
 * @param {string[]} galleryTitle - Titles for the carousel media.
 * @return {void}
 */
function displayCarousel(href, title, parent, gallery, galleryTitle) {
  const $carouselWrapper = document.getElementById("carousel_modal");
  $carouselWrapper.style.display = "block";
  document.body.classList.add("modal-open");

  carouselInstance = new Carousel(href, title, gallery, galleryTitle);
  parent.appendChild(carouselInstance.render());

  const $modal = document.querySelector(".carousel_content");

  if ($modal) {
    $modal.focus();
    focusCarouselModal($modal);
  }
}

function closeCarousel() {
  const $carousel = document.getElementById("carousel_modal");
  $carousel.style.display = "none";
  document.body.classList.remove("modal-open");
  document.removeEventListener("keyup", onKeyUp);
}

/**
 * Sets up keyboard navigation within a carousel modal.
 *
 * @param {HTMLElement} modal - The carousel modal element.
 * @return {void}
 */
function focusCarouselModal(modal) {
  const $carouselModal = modal;

  $carouselModal.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      const focusableElements = $carouselModal.querySelectorAll("button");
      //const focusableVideo = document.querySelector("video[controls]");
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      } else if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    }
  });
  //   const videoElement = $carouselModal.querySelector("video[controls]");
  //   if (videoElement) {
  //     videoElement.focus();
  //   }
}
