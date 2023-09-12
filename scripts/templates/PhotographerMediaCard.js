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
    this._photographName = photographName;
    this._media = media;
    this._count = media.likes;
    this._likesCounter = LikesCounter;

    this.$mediaWrapper = document.createElement("article");
    this.$mediaWrapper.classList.add("photograph_media_item");
    this.$mediaWrapper.setAttribute(
      "data-testid",
      `photograph_media_item-${this._id}`
    );
  }

  handleLikeButton() {
    const $heartIcon = this.$mediaWrapper.querySelector(".heart-icon");
    const $likeCount = this.$mediaWrapper.querySelector(".like-count");

    $heartIcon.addEventListener("click", () => {
      if ($heartIcon.classList.contains("liked")) {
        $heartIcon.classList.remove("liked");
        this._count--;
        this._likesCounter.notifyObservers("DEC");
      } else {
        $heartIcon.classList.add("liked");
        this._count++;
        this._likesCounter.notifyObservers("INC");
      }
      $likeCount.textContent = this._count;
    });
  }

  /**
   * Create and return the HTML element for the media card.
   * @returns {HTMLElement} The created HTML element representing the media card.
   */
  createMediaCard() {
    const mediaCard = `
      <a class="photograph_media_img" role="button" title="${
        this._media.title
      }" href="${
      this._media.image && this._media.image !== ""
        ? this._media.image
        : this._media.video
    }" >
    
      ${
        this._media.image && this._media.image !== ""
          ? `<img src="${this._media.image}" alt="${this._media.title}"></img>`
          : this._media.video
          ? `<video src="${this._media.video}" type="video/mp4">Your browser does not support the video tag.</video>`
          : ""
      }     
      </a>
           
        <div class="media_footer">
          <h3>${this._media.title}</h3>
          <span class= "like-count" aria-label="likes">${
            this._media.likes
          }</span>
          <span class="heart-icon">
            <i class="fas fa-heart"></i>
          </span>         
        </div>   
        <div class="footer"></div> 

     `;

    this.$mediaWrapper.innerHTML = mediaCard;
    this.handleLikeButton();

    return this.$mediaWrapper;
  }
}
