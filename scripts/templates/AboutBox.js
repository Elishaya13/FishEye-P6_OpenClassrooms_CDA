class AboutBox {
  constructor(likes, price) {
    this.likes = likes;
    this.price = price;
  }

  render() {
    const $photographAboutDiv = document.createElement("div");
    $photographAboutDiv.classList.add("photograph_about");

    const photographAbout = `
    
    <span class = "likes-counter" aria-label="Nombre de Likes">${this.likes}</span>
    <span class="heart-icon" role="img" aria-label="Icone Likes">
    <i class="fas fa-heart"></i>
    </span>
    <span aria-label="Prix par jour du photographe">${this.price}€ / jour  </span>
  `;
    $photographAboutDiv.innerHTML = photographAbout;

    return $photographAboutDiv;
  }
}
