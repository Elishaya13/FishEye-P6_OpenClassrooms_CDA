import PhotographersApi from '../api/Api.js';
import { PhotographersFactory } from '../factories/PhotographersFactory.js';
import { FilterData } from '../utils/FilterData.js';
import { PhotographerPageTemplate } from '../templates/PhotographerPageTemplate.js';

/**
 * Class representing a photographer page.
 * This class handles the display of a photographer's page, including their information and media.
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

    // Instance of the PhotographersApi class for fetching photographer data from the specified JSON file.
    this.photographersApi = new PhotographersApi(
      '../../data/photographers.json'
    );
  }

  /**
   * Main method to initialize the photographer page.
   */
  async main() {
    // Get data from API
    const photographersData =
      await this.photographersApi.getPhotographersData();

    const Photographers = new PhotographersFactory(
      photographersData,
      'photographers'
    );
    // All "photographers" data
    const photographers = Photographers.createPhotographers();

    // All "media" data
    const Medias = new PhotographersFactory(photographersData, 'medias');

    // Filter for keep the data for this photographer
    const PhotographFilter = new FilterData(
      this.photographerId,
      photographers,
      Medias
    );

    const PhotographById = await PhotographFilter.getDatasPhotographerById(
      this.photographerId
    );

    const MediasById = await PhotographFilter.getMediaByPhotographerId(
      this.photographerId
    );

    if (!PhotographById) {
      console.error('Photographer data not available');
      return;
    }

    const photographerName = PhotographById.name;

    const Template = new PhotographerPageTemplate(
      PhotographById,
      MediasById,
      photographerName
    );
    // Call the methods of the class for creating each visual part of the page
    Template.createPhotographHeaderContent(this.$photographersWrapper);
    Template.createPhotographSortBox(this.$photographerMediasWrapper, Template);

    Template.createPhotographMediaContent(
      this.$photographerMediasWrapper,
      'Popularité'
    );
    Template.createPhotographBoxAbout(this.$photographerMain);
    Template.createPhotographerModal(this.$photographerModal);
    Template.createPhotographCarousel(this.$photographCarousel);
  }
  catch(error) {
    console.error('Error:', error);
  }
}

// Create an instance of PhotographerPage and initialize the page
const pagePhotographe = new PhotographerPage();
pagePhotographe.main();
