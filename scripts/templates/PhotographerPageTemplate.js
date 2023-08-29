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
    const photographerData = new Photographer(this._photographer);

    // Create photographer header content
    const photographHeader = `
    <div class="photographer-infos-container" data-testid="photographer-infos-container">
      <h2>${photographerData.name}</h2>
      <h3>${photographerData.city}, ${this._photographer.country}</h3>
      <p>${photographerData.tagline}</p>
    </div>  
      <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
    <div class="photographer-profil-container" data-testid="photographer-profil-container">  
      <img          
            alt="${photographerData.name}"
            src="${photographerData.portrait}"
          
        /> 
    </div>          
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

  createPhotographAboutContent(parent) {
    const $photographAboutDiv = document.createElement("div");
    $photographAboutDiv.classList.add("photograph-about");

    const photographAbout = `
    <div>Rectangle like et prix</div>
    `;
    $photographAboutDiv.innerHTML = photographAbout;
    parent.appendChild($photographAboutDiv);
  }
}
