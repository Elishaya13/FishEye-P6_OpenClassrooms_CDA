class PhotographerMediaCard {
  constructor(media, photographName) {
    this._photographName = photographName;
    this._media = media;
  }

  createMediaCard() {
    const $mediaDiv = document.createElement("article");
    $mediaDiv.classList.add("photograph-media-item");
    console.log(this._media);

    const mediaCard = `
    <h3>${this._media.title}</h3>
    <img src="${this._media.image}" alt="${this._media.title}"></img>`;

    $mediaDiv.innerHTML = mediaCard;

    return $mediaDiv;
  }
}
