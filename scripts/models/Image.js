import { Media } from './Media.js';

export class Image extends Media {
  constructor(data) {
    super(data);
    if (data.image !== undefined) {
      this._image = data.image;
    } else {
      this._image = '';
    }
    if (data.title !== undefined) {
      this._title = data.title;
    } else {
      this._title = '';
    }
  }

  get mediaHtml() {
    return `<img src="${this._image}" alt="${this._title}"></img>`;
  }
  get path() {
    return this._image || '';
  }
}
