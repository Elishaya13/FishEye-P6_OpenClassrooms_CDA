/**
 * Class representing a template for a media card in the photographer's media grid.
 */
class PhotographerMediaCard {
  /**
   * Create a PhotographerMediaCard.
   * @param {Object} media - The media data for the card.
   * @param {string} photographName - The name of the photographer.
   */
  constructor(media, photographName) {
    this._photographName = photographName;
    this._media = media;
  }

  /**
   * Create and return the HTML element for the media card.
   * @returns {HTMLElement} The created HTML element representing the media card.
   */
  createMediaCard() {
    const $mediaDiv = document.createElement("article");
    $mediaDiv.classList.add("photograph-media-item");
    $mediaDiv.setAttribute("data-testid", `photograph-media-item-${this._id}`);

    const mediaCard = `
      <a class="photograph-media-img" role="button" title="${
        this._media.title
      }" href="#">
      ${
        this._media.image && this._media.image !== ""
          ? `<img src="${this._media.image}" alt="${this._media.title}"></img>`
          : this._media.video
          ? `<video src="${this._media.video}" type="video/mp4">Your browser does not support the video tag.</video>`
          : ""
      }     
      </a>
           
        <div class="media-footer">
          <h3>${this._media.title}</h3>
          <span class="like-count">0</span>
          <span class="heart-icon">
            <i class="far fa-heart"></i>
          </span>         
        </div>    

     `;

    $mediaDiv.innerHTML = mediaCard;

    return $mediaDiv;
  }
}
