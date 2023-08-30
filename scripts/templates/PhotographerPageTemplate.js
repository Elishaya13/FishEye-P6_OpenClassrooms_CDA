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

    this.$countDisplay = null;

    // Total Number of Likes
    this.likes = this._medias
      .map((media) => media.likes)
      .reduce((a, b) => a + b, 0);

    // Observable & Observer
    this.counterLikes = new LikesCounter(this.likes);
    this.displayLikes = null;
  }

  /**
   * Create and inject the photographer header content into the DOM.
   * @param {HTMLElement} parent - The parent element to which the content will be injected.
   */
  createPhotographHeaderContent(parent) {
    const Template = new PhotographerHeader(this._photographer);
    parent.innerHTML = Template.render();
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
          this._photographerName,
          this.counterLikes
        );
        parent.appendChild(Template.createMediaCard());
      });
  }

  /**
   * Create and inject the about content for the photographer page into the DOM.
   * @param {HTMLElement} parent - The parent element to which the content will be injected.
   */
  createPhotographBoxAbout(parent) {
    const Template = new AboutBox(this.likes, this._photographer.price);
    const renderedTemplate = Template.render();
    parent.appendChild(renderedTemplate);

    //  The DOM element that displays the likes count.
    this.$countDisplay = renderedTemplate.querySelector(".likes-counter");

    // The observer that updates the likes display when the likes count changes.
    this.displayLikes = new LikesDisplay(this.likes, this.$countDisplay);

    // Connect the observer (displayLikes) to the observable (counterLikes)
    this.counterLikes.subscribe(this.displayLikes);
  }

  /**
   * Create and inject the photographer modal content into the DOM.
   * @param {HTMLElement} parent - The parent element to which the modal content will be injected.
   */
  createPhotographerModal(parent) {
    const Template = new Modal(this._photographerName);
    parent.appendChild(Template.render());
  }
}
