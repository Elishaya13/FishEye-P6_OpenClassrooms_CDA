import PhotographersApi from '../api/Api.js';
import { PhotographerPageTemplate } from '../templates/PhotographerPageTemplate.js';
/**
 * Class representing a photographer page.
 */
class PhotographerPage {
  constructor() {
    // Targets DOM elements
    this.$photographersWrapper = document.querySelector('.photograph_header');
    this.$photographerMediasWrapper = document.querySelector(
      '.photograph_medias_section'
    );
    this.$photographerMain = document.getElementById('main');
    this.$photographerModal = document.getElementById('contact_modal');
    this.$photographCarousel = document.getElementById('carousel_modal');

    // Retrieves the ID parameter passed on the page
    this.params = new URL(document.location).searchParams;
    this.photographerId = parseInt(this.params.get('id'));

    // Get data from API
    this.photographerData = new PhotographersApi(
      '../../data/photographers.json'
    ).getPhotographerById(this.photographerId);

    this.photographerMedia = new PhotographersApi(
      '../../data/photographers.json'
    ).getMediaByPhotographerId(this.photographerId);
  }

  /**
   * Main method to initialize the photographer page.
   */
  async main() {
    try {
      const photographerData = await this.photographerData;
      const photographerDataMedia = await this.photographerMedia;

      if (!photographerData) {
        console.error('Photographer data not available');
        return;
      }

      const photographerName = photographerData.name;

      const Template = new PhotographerPageTemplate(
        photographerData,
        photographerDataMedia,
        photographerName
      );
      // Call the methods of the class for creating each visual part of the page
      Template.createPhotographHeaderContent(this.$photographersWrapper);
      Template.createPhotographSortBox(
        this.$photographerMediasWrapper,
        Template
      );

      Template.createPhotographMediaContent(
        this.$photographerMediasWrapper,
        'Popularité'
      );
      Template.createPhotographBoxAbout(this.$photographerMain);
      Template.createPhotographerModal(this.$photographerModal);
      Template.createPhotographCarousel(this.$photographCarousel);
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

// Create an instance of PhotographerPage and initialize the page
const pagePhotographe = new PhotographerPage();
pagePhotographe.main();
