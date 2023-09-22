import { PhotographerHeader } from './PhotographerHeader.js';
import { Media } from '../models/Media.js';
import { SortBox } from './SortBox.js';
import { PhotographerMediaCard } from './PhotographerMediaCard.js';
import { LikesCounter } from '../likes/LikesCounter.js';
import { LikesDisplay } from '../likes/LikesDisplay.js';
import { AboutBox } from './AboutBox.js';
import { Modal } from './ContactModal.js';
import { sortBy } from '../utils/sorter.js';
import { displayCarousel } from '../utils/carousel.js';
import { displayModal } from '../utils/contactForm.js';

/**
 * Class representing a template for the photographer page.
 */
export class PhotographerPageTemplate {
  /**
   * Create a PhotographerPageTemplate.
   * @param {Object} photographer - The photographer data.
   * @param {Array} medias - An array of media objects associated with the photographer.
   * @param {string} photographerName - The name of the photographer.
   */
  constructor(photographer, medias, photographerName) {
    this.photographer = photographer;
    this.medias = medias;
    this.photographerName = photographerName;
    this.$countDisplay = null;

    // Total Number of Likes
    this.likes = this.medias
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
    const Template = new PhotographerHeader(this.photographer);
    parent.innerHTML = Template.render();

    const $contact_button = document.querySelector('.contact_button');
    $contact_button.addEventListener('click', displayModal);
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
    const sortedMedias = sortBy(selectValue, this.medias);
    const $parentContainer = document.getElementById('carousel_modal');

    sortedMedias
      .map((media) => new Media(media, this.photographerName))
      .forEach((media) => {
        const Template = new PhotographerMediaCard(
          media,
          this.photographerName,
          this.counterLikes,
          this.medias
        );
        parent.appendChild(Template.createMediaCard());
      });

    this.createPhotographCarousel($parentContainer);
  }

  /**
   * Create and inject the about content for the photographer page into the DOM.
   * @param {HTMLElement} parent - The parent element to which the content will be injected.
   */
  createPhotographBoxAbout(parent) {
    const Template = new AboutBox(this.likes, this.photographer.price);
    const renderedTemplate = Template.render();
    parent.appendChild(renderedTemplate);

    //  The DOM element that displays the likes count.
    this.$countDisplay = renderedTemplate.querySelector('.likes-counter');

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
    const Template = new Modal(this.photographerName);
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
      const href = link.getAttribute('href');
      const title = link.getAttribute('title');

      if (href && title) {
        gallery.push(href);
        galleryTitle.push(title);

        link.addEventListener('click', (e) => {
          e.preventDefault();
          displayCarousel(href, title, parent, gallery, galleryTitle);
        });
      }
    });
  }
}
