import PhotographersApi from '../api/Api.js';
import { Photographer } from '../models/Photographer.js';
import { IndexPhotographerCard } from '../templates/IndexPhotographerCard.js';

/**
 * Class representing the index page.
 * This class is responsible for displaying photographer cards on the index page.
 */
class Index {
  constructor() {
    this.$photographersWrapper = document.querySelector(
      '.photographer_section'
    );

    // Instance of the PhotographersApi class for fetching photographer data from the specified JSON file.
    this.photographersApi = new PhotographersApi(
      '../../data/photographers.json'
    );
  }

  /**
   * Main method to initialize the index page and display photographer cards.
   * @async
   */
  async main() {
    // Get data from API
    const photographersData =
      await this.photographersApi.getPhotographersData();

    console.log(photographersData.photographers);

    const photographers = photographersData.photographers;

    photographers
      .map((photographer) => new Photographer(photographer))
      .forEach((photographer) => {
        const Template = new IndexPhotographerCard(photographer);
        this.$photographersWrapper.appendChild(
          Template.createPhotographerCard()
        );
      });
  }
}
const index = new Index();
index.main();
