import { Media } from './Media.js';

export class Video extends Media {
  constructor(data) {
    super(data);
    this._id = data.id;
    if (data.video !== undefined) {
      this._video = data.video;
    }
  }

  get mediaHtml() {
    return `<video>
    <source src="${this._video}" type="video/mp4" aria-describedby="media-description-${this._id}">Your browser does not support the video tag.</source>
    </video>`;
  }
  get path() {
    return this._video || '';
  }
}
