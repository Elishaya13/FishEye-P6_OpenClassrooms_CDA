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
}
