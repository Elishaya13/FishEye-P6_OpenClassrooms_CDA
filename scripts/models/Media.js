export class Media {
  constructor(data, photographerName) {
    this._id = data.id;
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._likes = data.likes;
    this._date = data.date;
    this._price = data.price;
    this._photographerName = photographerName;
    if (data.image !== undefined) {
      this._image = data.image;
    }
    if (data.video !== undefined) {
      this._video = data.video;
    }
  }

  get id() {
    return this._id;
  }

  get photographerId() {
    return this._photographerId;
  }

  get title() {
    return this._title;
  }

  get likes() {
    return this._likes;
  }

  get date() {
    return this._date;
  }

  get price() {
    return this._price;
  }

  /**
   * Get the file (image or video) associated with the media.
   *
   * @param {string} type - The type of file to retrieve ("image" or "video").
   * @returns {string} The file path or an empty string if the file doesn't exist.
   */
  getFile(type) {
    if (type === 'image' || type === 'video') {
      let file = '';
      if (this[`_${type}`]) {
        // Get the first word (first name)
        let photographerFirstName = this._photographerName.split(' ')[0];
        if (this._photographerName.includes('-')) {
          // Replace the dash with a space
          photographerFirstName = this._photographerName.replace('-', ' ');
          const nameParts = photographerFirstName.split(' ');
          if (nameParts.length > 1) {
            // Take the first two words
            photographerFirstName = nameParts.slice(0, 2).join(' ');
          }
        }
        file = `/assets/photographers/${photographerFirstName}/${
          this[`_${type}`]
        }`;
      }
      return file;
    }
    return '';
  }

  get image() {
    return this.getFile('image');
  }

  get video() {
    return this.getFile('video');
  }
}
