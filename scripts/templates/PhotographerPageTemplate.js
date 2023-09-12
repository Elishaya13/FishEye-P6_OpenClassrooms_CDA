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

    this.selectValue = "Popularité";
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
   * Creates a photograph sort box and appends it to a parent element.
   *
   * @param {HTMLElement} parent - The parent element to which the sort box will be appended.
   * @param {Photograph} instancePhotograph - Instance of the PhotographPageTemplate class.
   */
  createPhotographSortBox(parent, instancePhotograph) {
    const Template = new SortBox(instancePhotograph);
    const sortBoxElement = Template.render();
    parent.appendChild(sortBoxElement);
  }

  /**
   * Create and inject the photographer media content into the DOM.
   * @param {HTMLElement} parent - The parent element to which the content will be injected.
   */
  createPhotographMediaContent(parent, selectValue) {
    if (selectValue === "Popularité") {
      sortByLikes(this._medias);
    } else if (selectValue === "Date") {
      sortByDate(this._medias);
    } else if (selectValue === "Titre") {
      sortByTitle(this._medias);
    }

    this._medias
      .map((media) => new Media(media, this._photographerName))
      .forEach((media) => {
        const Template = new PhotographerMediaCard(
          media,
          this._photographerName,
          this.counterLikes,
          this._medias
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
  /**
   * Creates a photograph carousel from links found in the page.
   *
   * This method searches for links `<a>` ending with ".jpg" or ".mp4" in the page,
   * extracts their URLs and titles, and adds event handlers to display the carousel
   * when one of these links is clicked.
   *
   * @param {HTMLElement} parent - The parent element where the carousel will be displayed.
   * @returns {void}
   */
  createPhotographCarousel(parent) {
    const links = Array.from(
      document.querySelectorAll(`a[href$=".jpg"], a[href$=".mp4"]`)
    );
    const gallery = [];
    const galleryTitle = [];

    links.forEach((link) => {
      const href = link.getAttribute("href");
      const title = link.getAttribute("title");

      if (href && title) {
        gallery.push(href);
        galleryTitle.push(title);

        link.addEventListener("click", (e) => {
          e.preventDefault();
          displayCarousel(href, title, parent, gallery, galleryTitle);
        });
      }
    });
  }
}
