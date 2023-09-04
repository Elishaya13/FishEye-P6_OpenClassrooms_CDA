class Carousel {
  constructor(url) {
    this.url = url;
    this.$wrapper = document.querySelector(".carousel_wrapper");

    if (!this.$wrapper) {
      this.$wrapper = document.createElement("div");
      this.$wrapper.classList.add("carousel_wrapper");
    }
  }
  render() {
    const $carouselElements = `
        <div class="carousel_content">
          <button class="carousel_close" onclick="closeCarousel()" aria-label="Fermer">
            <span class="sr-only">Fermer</span>
          </button>        
          <button class="carousel_next">
            <span class="sr-only">Suivante</span>
          </button>
          <button class="carousel_prev">
            <span class="sr-only">Précedente</span>      
          </button>
          <div class="carousel_media_container">
            ${
              this.url.endsWith(".mp4")
                ? `
                <video controls>
                  <source src="${this.url}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              `
                : `
                <img src="${this.url}" alt="">
              `
            }
            <h3> blablablatitre</h3>
          </div>
          
        </div> 
      `;

    this.$wrapper.innerHTML = $carouselElements;

    return this.$wrapper;
  }

  showPreviousImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.showImage(this.currentIndex);
    }
  }

  showNextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.showImage(this.currentIndex);
    }
  }
}
