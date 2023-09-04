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
    const photographersData = await this.photographersApi.getData(
      "photographers"
    );

    photographersData
      .map((photographer) => new Photographer(photographer))
      .forEach((photographer) => {
        const Template = new IndexPhotographerCard(photographer);
        this.$photographersWrapper.appendChild(
          Template.createPhotographerCard()
        );
      });
  }
}
const index = new Index();
index.main();
