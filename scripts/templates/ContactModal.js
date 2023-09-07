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
    $photographerModal.setAttribute("tabindex", "-1");
    $photographerModal.setAttribute("role", "dialog");
    $photographerModal.setAttribute("aria-modal", "true");
    $photographerModal.setAttribute("aria-label", "formulaire de contact");

    const photographModalContent = `
    <header>
        <h2 id="contact-name">Contactez-moi <br> ${this._name}</h2>
        <button class="contact_close_button" aria-label="Fermer le formulaire de contact" data-testid="modal_button_close" onclick="closeModal()" >
          <img src="assets/icons/close.svg" alt="Fermer" />
          <span class="sr-only">Fermer</span>
        </button> 
    </header>
      <form id="myForm" action="#" method="post">
          <label id="label-prenom" for="prenom" data-testid="prenom-label">Prénom</label>
          <input type="text" id="prenom" name="prenom" required aria-required="true" aria-labelledby="label-prenom" placeholder="Votre prénom">
          
          <label id="label-nom" for="nom" data-testid="nom-label">Nom</label>
          <input type="text" id="nom" name="nom" required aria-required="true" aria-labelledby="label-nom" placeholder="Votre nom">
          
          <label id="label-email" for="email" data-testid="email-label">Email</label>
          <input type="email" id="email" name="email" required aria-required="true" aria-labelledby="label-email" placeholder="ex: marceldupond@gmail.com">
          
          <label id="label-message" for="message" data-testid="message-label">Votre Message</label>
          <textarea id="message" name="message" required aria-required="true" aria-labelledby="label-message" placeholder="Votre message"></textarea>
          
          <button class="contact_button send_button" aria-label="Envoyer le formulaire">Envoyer</button>
      </form>
   
    `;
    $photographerModal.innerHTML = photographModalContent;

    const $sendButton = $photographerModal.querySelector(".send_button");
    $sendButton.addEventListener("click", this.handleFormSubmit.bind(this));

    return $photographerModal;
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const $form = document.getElementById("myForm");
    // Retrieving field values
    const prenomValue = document.querySelector("#prenom").value;
    const nomValue = document.querySelector("#nom").value;
    const emailValue = document.querySelector("#email").value;
    const messageValue = document.querySelector("#message").value;

    if (prenomValue && nomValue && emailValue && messageValue) {
      // Displaying values ​​in the console
      console.log("Prénom:", prenomValue);
      console.log("Nom:", nomValue);
      console.log("Email:", emailValue);
      console.log("Message:", messageValue);

      alert(`votre message : "${messageValue}" est envoyé à ${this._name}!`);
      $form.reset();
      closeModal();
    } else {
      alert("Veuillez remplir tous les champs");
    }
  }
}
