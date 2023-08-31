class PhotographerHeader {
  constructor(photographer) {
    this._photographer = photographer;
  }
  render() {
    const photographerData = new Photographer(this._photographer);

    // Create photographer header content
    const photographHeader = `
    <div class="photographer-infos-container" data-testid="photographer-infos-container">
      <h1>${photographerData.name}</h1>
      <h2>${photographerData.city}, ${this._photographer.country}</h2>
      <p>${photographerData.tagline}</p>
    </div>  
      <button class="contact_button" aria-labelledby="contact-name" onclick="displayModal()">Contactez-moi</button>
    <div class="photographer-profil-container" data-testid="photographer-profil-container">  
      <img          
            alt="${photographerData.name}"
            src="${photographerData.portrait}"
          
        /> 
    </div>          
       `;

    return photographHeader;
  }
}
