/**
 * Represents a modal for contacting the photographer.
 */
class Modal {
  constructor(photographerName) {
    this._name = photographerName;
  }

  /**
   * Render the modal content.
   * @returns {HTMLElement} The rendered modal element.
   */
  render() {
    const $photographerModal = document.createElement("div");
    $photographerModal.classList.add("modal");

    const photographModalContent = `
    <header>
        <h4>Contactez-moi !!${this._name}</h4>
        <img src="assets/icons/close.svg" onclick="closeModal()" />
    </header>
    <form>
        <div>
          <label>Prénom</label>
          <input />
        </div>
        <button class="contact_button">Envoyer</button>
    </form>

    `;
    $photographerModal.innerHTML = photographModalContent;
    return $photographerModal;
  }
}
