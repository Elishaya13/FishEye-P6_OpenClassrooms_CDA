/**
 * Class representing a template for the photographer page.
 */
class PhotographerPageTemplate {
  /**
   * Create a PhotographerPageTemplate.
   * @param {Object} photographer - The photographer data.
   * @param {Array} medias - An array of media objects associated with the photographer.
   * @param {string} photographerName - The name of the photographer.
   */
  constructor(photographer, medias, photographerName) {
    this._photographer = photographer;
    this._medias = medias;
    this._photographerName = photographerName;
  }

  /**
   * Create and inject the photographer header content into the DOM.
   * @param {HTMLElement} parent - The parent element to which the content will be injected.
   */
  createPhotographHeaderContent(parent) {
    // Create photographer header content
    const photographHeader = `
      <h2>${this._photographer.name}</h2>
      <h3>${this._photographer.city}, ${this._photographer.country}</h3>
      <p>${this._photographer.tagline}</p>
      <button class="contact_button" onclick="displayModal()">Contactez-moi</button>

     `;
    parent.innerHTML = photographHeader;
  }

  /**
   * Create and inject the photographer media content into the DOM.
   * @param {HTMLElement} parent - The parent element to which the content will be injected.
   */
  createPhotographMediaContent(parent) {
    this._medias
      .map((media) => new Media(media, this._photographerName))
      .forEach((media) => {
        const Template = new PhotographerMediaCard(
          media,
          this._photographerName
        );
        parent.appendChild(Template.createMediaCard());
      });
  }
}
