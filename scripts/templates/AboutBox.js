/**
 * Represents an about box displaying photographer popularity and daily price.
 * @class
 */
export class AboutBox {
  /**
   * Create an instance of the AboutBox class.
   * @constructor
   * @param {number} likes - The number of likes for the photographer.
   * @param {number} price - The daily price of the photographer.
   */
  const;
  constructor(likes, price) {
    this.likes = likes;
    this.price = price;
  }

  render() {
    const $photographAboutDiv = document.createElement('div');
    $photographAboutDiv.setAttribute('tabindex', '0');
    $photographAboutDiv.setAttribute(
      'aria-label',
      'Popularité et tarif journalier du photographe'
    );
    $photographAboutDiv.classList.add('photograph_about');

    const photographAbout = `
    <div class="about_popularity_container">
        <span class = "likes-counter" aria-label="Nombre de Likes">${this.likes}</span>
        <span class="heart-icon" role="img" aria-label="Icone Likes">
        <em class="fas fa-heart"></em>
        </span>
    </div>    
    <span class="about_price" aria-label="Prix par jour du photographe">${this.price}€ / jour  </span>
  `;
    $photographAboutDiv.innerHTML = photographAbout;

    return $photographAboutDiv;
  }
}
