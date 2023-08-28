class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createPhotographerCard() {
    const $wrapper = document.createElement("article");

    const photographerCard = `
      <a href=photographer.html?id=${this._photographer.id} role="link" aria-labelledby="photographer-name">
        <img          
            alt="${this._photographer.name}"
            src="${this._photographer.portrait}"
          
        />    
        <h2 id="photographer-name">${this._photographer.name}</h2>
      </a>
      <h3>${this._photographer.city}, ${this._photographer.country}</h3>
      <p>${this._photographer.tagline}</p>
      <span>${this._photographer.price}€/jour</span>
   
    `;
    $wrapper.innerHTML = photographerCard;
    return $wrapper;
  }
}
