export class IndexPhotographerCard {
  constructor(photographer) {
    this.photographer = photographer;
  }

  createPhotographerCard() {
    const $wrapper = document.createElement('article');

    const photographerCard = `
      <a href=photographer.html?id=${this.photographer.id} aria-labelledby="${this.photographer.name}" data-testid="photographer-card-${this.photographer.id}">
        <img          
            alt="photo de profil du photographe : ${this.photographer.name}"
            src="${this.photographer.portrait}"
          
        />    
        <h2 id="${this.photographer.name}">${this.photographer.name}</h2>
      </a>
      <h3>${this.photographer.city}, ${this.photographer.country}</h3>
      <p>${this.photographer.tagline}</p>
      <span>${this.photographer.price}€/jour</span>
   
    `;
    $wrapper.innerHTML = photographerCard;
    return $wrapper;
  }
}
