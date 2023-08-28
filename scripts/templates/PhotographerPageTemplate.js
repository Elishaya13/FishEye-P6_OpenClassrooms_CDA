class PhotographerPageTemplate {
  constructor(photographer, medias, photographerName) {
    this._photographer = photographer;
    this._medias = medias;
    this._photographerName = photographerName;
  }

  // createPhotographHeaderContent(parent) {
  //   // Create photographer header content
  //   const photographHeaderContent = `
  //     <h2>${this._photographer.name}</h2>
  //     <h3>${this._photographer.city}, ${this._photographer.country}</h3>
  //     <!-- Autres éléments que vous souhaitez ajouter ici -->
  //   `;

  //   // Get a reference to the button element
  //   const buttonElement = parent.querySelector(".contact_button");

  //   // Insert the new content before the button
  //   buttonElement.insertAdjacentHTML("beforebegin", photographHeaderContent);
  // }

  createPhotographHeaderContent(parent) {
    // Create photographer header content
    const photographHeader = `
       <h2>${this._photographer.name}</h2>
       <h3>${this._photographer.city}, ${this._photographer.country}</h3>
  <button class="contact_button" onclick="displayModal()">Contactez-moi</button>

     `;
    parent.innerHTML = photographHeader;
  }

  createPhotographMediaContent(parent) {
    this._medias
      .map((media) => new Media(media, this._photographerName))
      .forEach((media) => {
        const Template = new PhotographerMediaCard(
          media,
          this._photographerName
        );
        parent.appendChild(Template.createMediaCard());
      });
  }
}
