class Media {
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

  get image() {
    if (this._image) {
      // Get the first word (first name)
      let photographerFirstName = this._photographerName.split(" ")[0];

      if (this._photographerName.includes("-")) {
        // Replace the dash with a space
        photographerFirstName = this._photographerName.replace("-", " ");
        const nameParts = photographerFirstName.split(" ");
        if (nameParts.length > 1) {
          // Take the first two words
          photographerFirstName = nameParts.slice(0, 2).join(" ");
        }
      }

      return `/assets/photographers/${photographerFirstName}/${this._image}`;
    }

    return ""; // Return an empty string if _image doesn't exist
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

  get video() {
    if (this._video) {
      // Get the first word (first name)
      let photographerFirstName = this._photographerName.split(" ")[0];

      if (this._photographerName.includes("-")) {
        // Replace the dash with a space
        photographerFirstName = this._photographerName.replace("-", " ");
        const nameParts = photographerFirstName.split(" ");
        if (nameParts.length > 1) {
          // Take the first two words
          photographerFirstName = nameParts.slice(0, 2).join(" ");
        }
      }

      return `/assets/photographers/${photographerFirstName}/${this._video}`;
    }

    return ""; // Return an empty string if _video doesn't exist
  }
}
