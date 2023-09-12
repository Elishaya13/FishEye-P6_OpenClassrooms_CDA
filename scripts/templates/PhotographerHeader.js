class PhotographerHeader {
  constructor(photographer) {
    this.photographer = photographer;
  }
  render() {
    const photographerData = new Photographer(this.photographer);

    const photographHeader = `
    <div class="photographer_infos_container" data-testid="photographer-infos-container">
      <h1>${photographerData.name}</h1>
      <h2>${photographerData.city}, ${this.photographer.country}</h2>
      <p>${photographerData.tagline}</p>
    </div>  
      <button class="contact_button" aria-labelledby="contact-name" onclick="displayModal()">Contactez-moi</button>
    <div class="photographer_profil_container" data-testid="photographer-profil-container">  
      <img          
            alt="${photographerData.name}"
            src="${photographerData.portrait}"
          
        /> 
    </div>          
       `;

    return photographHeader;
  }
}
