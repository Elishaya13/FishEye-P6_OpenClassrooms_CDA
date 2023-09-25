/**
 * Class representing a template for a media card in the photographer's media grid.
 */
export class PhotographerMediaCard {
  /**
   * Create a PhotographerMediaCard.
   * @param {Object} media - The media data for the card.
   * @param {string} photographName - The name of the photographer.
   * @param {LikesCounter} LikesCounter - An instance of the LikesCounter class for managing likes count
   */
  constructor(media, photographName, LikesCounter) {
    this.photographName = photographName;
    this.media = media;
    this.count = media.likes;
    this.likesCounter = LikesCounter;

    this.$mediaWrapper = document.createElement('article');
    this.$mediaWrapper.classList.add('photograph_media_item');
  }

  handleLikeButton() {
    const $heartIcon = this.$mediaWrapper.querySelector('.heart-icon');
    const $likeCount = this.$mediaWrapper.querySelector('.like-count');

    const toggleLike = () => {
      if ($heartIcon.classList.contains('liked')) {
        $heartIcon.classList.remove('liked');
        this.count--;
        this.likesCounter.notifyObservers('DEC');
      } else {
        $heartIcon.classList.add('liked');
        this.count++;
        this.likesCounter.notifyObservers('INC');
      }
      $likeCount.textContent = this.count;
    };

    $heartIcon.addEventListener('click', toggleLike);

    $heartIcon.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
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
      this.media.image && this.media.image !== ''
        ? this.media.image
        : this.media.video
    }" >
    
      ${
        this.media.image && this.media.image !== ''
          ? `<img src="${this.media.image}" alt="${this.media.title}"></img>`
          : this.media.video
          ? `<video>
          <source src="${this.media.video}" type="video/mp4" aria-describedby="media-description-${this.media.id}">Your browser does not support the video tag.</source>
          </video>`
          : ''
      }     
      </a>     
           
        <div class="media_footer">
          <h3 id="media-description-${this.media.id}">${this.media.title}</h3>
          <span class= "like-count" aria-label="likes">${
            this.media.likes
          }</span>
          <a class="heart-icon" tabindex="0" role="button" aria-label="Cliquez pour aimer cet élément">
            <em class="fas fa-heart"></em>
          </a>         
        </div>   
        <div class="footer"></div> 

     `;

    this.$mediaWrapper.innerHTML = mediaCard;
    this.handleLikeButton();

    return this.$mediaWrapper;
  }
}
