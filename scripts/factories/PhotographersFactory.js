import { Photographer } from '../models/Photographer.js';

/**
 * Factory pattern for creating photographers or media data instances based on the provided type.
 * @class
 */
export class PhotographersFactory {
  constructor(data, type) {
    if (type === 'photographers') {
      this.data = data.photographers;
    } else if (type === 'medias') {
      return data.media;
    } else {
      throw 'Unknown type format';
    }
  }

  /**
   * Create an array of Photographer instances based on the provided data.
   * @returns {Array} An array of Photographer instances.
   */
  createPhotographers() {
    return this.data.map(
      (photographerData) => new Photographer(photographerData)
    );
  }
}
