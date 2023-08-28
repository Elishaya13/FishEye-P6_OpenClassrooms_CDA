class PhotographerPage {
  constructor() {
    // Targets DOM elements
    this.$photographersWrapper = document.querySelector(".photograph-header");
    this.$photographerMediasWrapper = document.querySelector(
      ".photograph-medias-section"
    );

    // Retrieves the ID parameter passed on the page
    this.params = new URL(document.location).searchParams;
    this.photographerId = parseInt(this.params.get("id"));

    // Get data from API
    this.photographerData = new PhotographersApi(
      "../../data/photographers.json"
    ).getPhotographerById(this.photographerId);

    this.photographerMedia = new PhotographersApi(
      "../../data/photographers.json"
    ).getMediaByPhotographerId(this.photographerId);
  }

  async main() {
    const photographerData = await this.photographerData;
    const photographerName = photographerData.name;

    const photographerDataMedia = await this.photographerMedia;

    const Template = new PhotographerPageTemplate(
      photographerData,
      photographerDataMedia,
      photographerName
    );

    // Call the methods of the class for creating each visual part of the page
    Template.createPhotographHeaderContent(this.$photographersWrapper);
    Template.createPhotographMediaContent(this.$photographerMediasWrapper);
  }
}
pagePhotographe = new PhotographerPage();
pagePhotographe.main();
