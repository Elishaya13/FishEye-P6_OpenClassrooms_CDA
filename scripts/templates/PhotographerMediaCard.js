/**
 * Class representing a template for a media card in the photographer's media grid.
 */
class PhotographerMediaCard {
  /**
   * Create a PhotographerMediaCard.
   * @param {Object} media - The media data for the card.
   * @param {string} photographName - The name of the photographer.
   */
  constructor(media, photographName, LikesCounter) {
    this.photographName = photographName;
    this.media = media;
    this.count = media.likes;
    this.likesCounter = LikesCounter;

    this.$mediaWrapper = document.createElement("article");
    this.$mediaWrapper.classList.add("photograph_media_item");
  }

  handleLikeButton() {
    const $heartIcon = this.$mediaWrapper.querySelector(".heart-icon");
    const $likeCount = this.$mediaWrapper.querySelector(".like-count");

    const toggleLike = () => {
      if ($heartIcon.classList.contains("liked")) {
        $heartIcon.classList.remove("liked");
        this.count--;
        this.likesCounter.notifyObservers("DEC");
      } else {
        $heartIcon.classList.add("liked");
        this.count++;
        this.likesCounter.notifyObservers("INC");
      }
      $likeCount.textContent = this.count;
    };

    $heartIcon.addEventListener("click", toggleLike);

    $heartIcon.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        toggleLike();
      }
    });
  }

  /**
   * Create and return the HTML element for the media card.
   * @returns {HTMLElement} The created HTML element representing the media card.
   */
  createMediaCard() {
    const mediaCard = `
      <a class="photograph_media_img" role="link" aria-label="Afficher le média dans le caroussel" title="${
        this.media.title
      }" href="${
      this.media.image && this.media.image !== ""
        ? this.media.image
        : this.media.video
    }" >
    
      ${
        this.media.image && this.media.image !== ""
          ? `<img src="${this.media.image}" alt="${this.media.title}"></img>`
          : this.media.video
          ? `<video src="${this.media.video}" type="video/mp4" aria-describedby="${this.media.title}">Your browser does not support the video tag.</video>`
          : ""
      }     
      </a>     
           
        <div class="media_footer">
          <h3>${this.media.title}</h3>
          <span class= "like-count" aria-label="likes">${
            this.media.likes
          }</span>
          <a class="heart-icon" tabindex="0" role="button" aria-label="Cliquez pour aimer cet élément">
            <i class="fas fa-heart"></i>
          </a>         
        </div>   
        <div class="footer"></div> 

     `;

    this.$mediaWrapper.innerHTML = mediaCard;
    this.handleLikeButton();

    return this.$mediaWrapper;
  }
}
