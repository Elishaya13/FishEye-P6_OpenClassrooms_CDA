function displayModal() {
  const $modalWrapper = document.getElementById("contact_modal");
  const $modal = document.querySelector(".modal");
  $modalWrapper.style.display = "block";
  $modal.focus();
  document.body.classList.add("modal-open");

  $modal.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      const focusableElements = $modal.querySelectorAll(
        "input, textarea, button"
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      } else if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    }
  });
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}
