/**
 * Represents an API for making HTTP requests.
 * @class
 */
class Api {
  /**
   * Create an instance of the Api class.
   * @constructor
   * @param {string} url  The base URL for API requests.
   */
  constructor(url) {
    this.url = url;
  }

  /**
   * Perform a GET request.
   * @async
   * @returns {Promise<Object>} A promise resolving to the JSON response.
   * @throws {Error} Throws an error if the request fails.
   */
  async get() {
    return fetch(this.url)
      .then((res) => res.json())
      .catch((err) => console.log('An error occurs', err));
  }
}

export default class PhotographersApi extends Api {
  /**
   *
   * @param {string} url The base URL for photographers' data.
   */
  constructor(url) {
    super(url);
  }

  /**
   * Get data of a specific type.
   *
   * @async
   * @param {string} dataType - The type of data to retrieve ("photographers" or "media").
   * @returns {Promise<Array|Object>} A promise resolving to the requested data.
   * @throws {Error} Throws an error if an invalid data type is provided.
   */
  async getData(dataType) {
    const data = await this.get();
    switch (dataType) {
      case 'photographers':
        return data.photographers;
      case 'media':
        return data.media;
      default:
        throw new Error('Invalid data type');
    }
  }

  /**
   * Get a photographer by ID.
   *
   * @async
   * @param {number} photographerId - The ID of the photographer
   * @returns {Promise<Object>} A promise resolving to the photographer object with the given ID
   */
  async getPhotographerById(photographerId) {
    const photographers = await this.getData('photographers');
    const photographer = photographers.find((p) => p.id === photographerId);
    if (photographer) {
      return photographer;
    } else {
      throw new Error('Photographer not found');
    }
  }

  /**
   * Get media by photographer ID.
   *
   * @param {number} photographerId - The ID of the photographer
   * @returns {Promise<Array>} - An array of media objects associated with the photographer ID.
   */
  async getMediaByPhotographerId(photographerId) {
    const mediaData = await this.getData('media');
    const photographerMedia = mediaData.filter(
      (media) => media.photographerId === photographerId
    );
    if (photographerMedia) {
      return photographerMedia;
    } else {
      throw new Error('Media not found');
    }
  }
}
