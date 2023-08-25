class Index {
  constructor() {
    this.$photographersWrapper = document.querySelector(
      ".photographer_section"
    );
    this.photographersApi = new PhotographersApi(
      "../../data/photographers.json"
    );
  }

  async main() {
    // Je récupere mes photographes de mon fichier photographers.json
    const photographersData = await this.photographersApi.getData(
      "photographers"
    );
    //Je parcours les données et je crée un élément pour chaque photographe dans le DOM
    photographersData
      .map((photographer) => new Photographer(photographer))
      .forEach((photographer) => {
        const Template = new PhotographerCard(photographer);
        this.$photographersWrapper.appendChild(
          Template.createPhotographerCard()
        );
      });
  }
}
const index = new Index();
index.main();
