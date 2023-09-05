class Carousel {
  /**   *
   * @param {string} url Path of the media
   * @param {string} title Title of the media
   * @param {string[]} gallery Carousel media paths
   */
  constructor(url, title, gallery, galleryTitle) {
    this.url = url;
    this.title = title;
    this.gallery = gallery;
    this.galleryTitle = galleryTitle;

    this.currentIndex = gallery.indexOf(url);
    this.onKeyUp = this.onKeyUp.bind(this);

    this.$wrapper = document.querySelector(".carousel_content");
    document.addEventListener("keyup", this.onKeyUp);

    if (!this.$wrapper) {
      this.$wrapper = document.createElement("div");
      this.$wrapper.classList.add("carousel_content");
      this.$wrapper.setAttribute("role", "dialog");
      this.$wrapper.setAttribute("aria-modal", "true");
      this.$wrapper.setAttribute("aria-label", "vue rapprochée de l'image");
    }
  }
  render() {
    const $carouselElements = `
        
          <button class="carousel_close" onclick="closeCarousel()" aria-label="Fermer">
            <span class="sr-only">Fermer</span>
          </button>        
          <button class="carousel_next" aria-label="Image suivante">
            <span class="sr-only">Suivante</span>
          </button>
          <button class="carousel_prev" aria-label="Image précédente">
            <span class="sr-only">Précedente</span>      
          </button>
          <div class="carousel_media_container">      
          </div>
          `;

    this.$wrapper.innerHTML = $carouselElements;

    this.showImage(this.url, this.galleryTitle);

    this.$wrapper
      .querySelector(".carousel_next")
      .addEventListener("click", this.showNextImage.bind(this));
    this.$wrapper
      .querySelector(".carousel_prev")
      .addEventListener("click", this.showPreviousImage.bind(this));

    return this.$wrapper;
  }

  showPreviousImage(e) {
    e.preventDefault();
    this.currentIndex -= 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.gallery.length - 1;
    }
    this.url = this.gallery[this.currentIndex];
    this.showImage(this.url, this.galleryTitle[this.currentIndex]);
  }

  showNextImage(e) {
    e.preventDefault();
    this.currentIndex += 1;
    if (this.currentIndex >= this.gallery.length) {
      this.currentIndex = 0;
    }
    this.url = this.gallery[this.currentIndex];
    this.showImage(this.url, this.galleryTitle[this.currentIndex]);
  }

  showImage(url, title) {
    {
      const container = this.$wrapper.querySelector(
        ".carousel_media_container"
      );
      title = this.galleryTitle[this.currentIndex];

      container.innerHTML = "";

      if (url.endsWith(".mp4")) {
        const video = document.createElement("video");
        video.controls = true;
        const source = document.createElement("source");
        source.src = url;
        source.type = "video/mp4";
        video.appendChild(source);
        container.appendChild(video);
      } else {
        const image = document.createElement("img");
        image.src = url;
        image.alt = title;
        container.appendChild(image);
      }

      const titleMedia = document.createElement("h3");
      titleMedia.textContent = title;
      container.appendChild(titleMedia);
    }
  }
  /**
   * Handles the keyup event for the carousel.
   * @param {KeyboardEvent} e
   * @return {void}
   */
  onKeyUp(e) {
    if (e.key === "Escape") {
      closeCarousel();
    } else if (e.key === "ArrowLeft") {
      this.showPreviousImage(e);
    } else if (e.key === "ArrowRight") {
      this.showNextImage(e);
    }
  }
}
