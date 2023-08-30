function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  document.body.classList.add("modal-open");
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}
