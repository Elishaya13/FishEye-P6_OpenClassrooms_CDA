class Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    this._url = url;
  }

  async get() {
    return fetch(this._url)
      .then((res) => res.json())
      .catch((err) => console.log("An error occurs", err));
  }
}

class PhotographersApi extends Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    super(url);
  }

  async getData(dataType) {
    const data = await this.get();
    if (dataType === "photographers") {
      return data.photographers;
    } else if (dataType === "media") {
      return data.media;
    } else {
      throw new Error("Invalid data type");
    }
  }
  async getPhotographerById(photographerId) {
    const photographers = await this.getData("photographers");
    const photographer = photographers.find((p) => p.id === photographerId);
    if (photographer) {
      return photographer;
    } else {
      throw new Error("Photographer not found");
    }
  }

  async getMediaByPhotographerId(photographerId) {
    // Récupere toutes les datas media
    const mediaData = await this.getData("media");
    // Filtre pour ne recuperer que celle de l'id donné
    const photographerMedia = mediaData.filter(
      (media) => media.photographerId === photographerId
    );
    if (photographerMedia) {
      return photographerMedia;
    } else {
      throw new Error("Media not found");
    }
  }
}
