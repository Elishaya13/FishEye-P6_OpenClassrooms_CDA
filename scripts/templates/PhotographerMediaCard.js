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

    const mediaCard = `
      <a class="photograph-media-img" role="button" title="" href="#">
      ${
        this._media.image && this._media.image !== ""
          ? `<img src="${this._media.image}" alt="${this._media.title}"></img>`
          : this._media.video
          ? `<video loop src="${this._media.video}"></video>`
          : ""
      }
      </a>
      <h3>${this._media.title}</h3>

     `;

    $mediaDiv.innerHTML = mediaCard;

    return $mediaDiv;
  }
}
