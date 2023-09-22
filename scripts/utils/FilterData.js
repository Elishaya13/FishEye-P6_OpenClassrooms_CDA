/**
 * Represents a utility class for filtering photographer data and media data.
 * @class
 */
export class FilterData {
  /**
   * Create a FilterData instance.
   * @constructor
   * @param {number} photographID - The ID of the photographer
   * @param {Array} dataPhotographer - An array of photographer data
   * @param {Array} dataMedia - An array of media data
   */
  constructor(photographID, dataPhotographer, dataMedia) {
    this.photographID = photographID;
    this.photographerData = dataPhotographer;
    this.photographerMedia = dataMedia;
  }

  /**
   * Get a photographer by ID.
   *
   * @async
   * @param {number} photographerId - The ID of the photographer
   * @returns {Promise<Object>} A promise resolving to the photographer object with the given ID
   * @throws {Error} Throws an error if the photographer with the specified ID is not found
   */
  async getDatasPhotographerById(photographerId) {
    const photographers = this.photographerData;
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
   * @returns {Promise<Array>} -  A promise resolving to an array of media objects associated with the photographer ID
   * @throws {Error} Throws an error if media associated with the specified photographer ID is not found
   */
  async getMediaByPhotographerId(photographerId) {
    const mediaData = this.photographerMedia;

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
