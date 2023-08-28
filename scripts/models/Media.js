class Media {
  constructor(data, photographerName) {
    this._id = data.id;
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._image = data.image;
    this._likes = data.likes;
    this._date = data.date;
    this._price = data.price;
    this._video = data.video || null; // vidéo facultative
    this._photographerName = photographerName;
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
    return this._video;
  }
}
