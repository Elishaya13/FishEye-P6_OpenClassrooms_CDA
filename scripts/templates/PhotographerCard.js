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
      <h3>${this._photographer.city}, ${this._photographer.country}</h3>
      <p>${this._photographer.tagline}</p>
      <span>${this._photographer.price}€/jour</span>
   
    `;
    $wrapper.innerHTML = photographerCard;
    return $wrapper;
  }
}
