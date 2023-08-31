class Carousel {
  constructor(media) {
    this.media = media;
    this.$carouselWrapper = document.createElement("div");
    this.$carouselWrapper.classList.add("carousel");
    this.images = [];
  }
  createCarousel() {
    console.log(this.media);
    const $carousel = `
    <div>
        <img></img>
    </div>  

        
   
    <button onclick="closeCarousel()">Close</button>
     `;
    this.$carouselWrapper.innerHTML = $carousel;
    return this.$carouselWrapper;
  }
}
// Recois un tableau d'images
// Pour chaque image recue , créer une vue de l'image dans un div
// affiche le div avec l'elementImage[0]

// function sur Bouton pour voir l'image precedente ou prochaine
// index du tableau -1 ou +1

// Le carrousel recuperera l'id de l'image clické // faire le lien sur la source // et devra enregistré cette image en 1er index [0]
