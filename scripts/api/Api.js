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

  async getPhotographersData() {
    return await this.get();
  }
}
