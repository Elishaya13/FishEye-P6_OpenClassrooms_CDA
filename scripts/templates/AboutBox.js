class AboutBox {
  constructor(likes, price) {
    this._likes = likes;
    this._price = price;
  }

  render() {
    const $photographAboutDiv = document.createElement("div");
    $photographAboutDiv.classList.add("photograph-about");

    const photographAbout = `
    
    <span class = "likes-counter" aria-label="Nombre de Likes">${this._likes}</span>
    <span class="heart-icon" aria-label="Icone Likes">
    <i class="fas fa-heart"></i>
    </span>
    <span arai-label="Prix par jour du photographe">${this._price}€ / jour  </span>
  `;
    $photographAboutDiv.innerHTML = photographAbout;

    return $photographAboutDiv;
  }
}
