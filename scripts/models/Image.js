import { Media } from './Media.js';

export class Image extends Media {
  constructor(data) {
    super(data);
    this._image = data.image ?? '';
    this._title = data.title ?? '';
  }

  get mediaHtml() {
    return `<img src="${this._image}" alt="${this._title}"></img>`;
  }
  get path() {
    return this._image;
  }
}
