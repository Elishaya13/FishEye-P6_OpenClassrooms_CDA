class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createPhotographerCard() {
    const $wrapper = document.createElement("article");

    const photographerCard = `
    
      <img
          alt="${this._photographer.name}"
          src="${this._photographer.portrait}"
      />
      <h2>${this._photographer.name}</h2>
   
    `;
    $wrapper.innerHTML = photographerCard;
    return $wrapper;
  }
}
