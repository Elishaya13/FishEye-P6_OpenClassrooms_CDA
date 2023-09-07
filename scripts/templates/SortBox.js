class SortBox {
  constructor() {
    this.$wrapper = document.createElement("div");
    this.$wrapper.classList.add("sort_box_container");
  }

  render() {
    const $sortBox = `
   
        <h4> Trier par </h4>
        <div class="custom_select">
            <select class="focusable_select" tabindex="0">
                <option value="0">Popularité</option>
                <option value="1">Date</option>
                <option value="2">Titre</option>
            </select>
            <div class="select_selected">Popularité</div>
            <div class="select_items">
                <div>Popularité</div>
                <div>Date</div>
                <div>Titre</div>
            </div>
    </div>        
    `;
    this.$wrapper.innerHTML = $sortBox;
    this.setupCustomSelect();
    return this.$wrapper;
  }
  setupCustomSelect() {
    const select = this.$wrapper.querySelector(".custom_select select");
    const selectedDiv = this.$wrapper.querySelector(".select_selected");
    const selectItems = this.$wrapper.querySelector(".select_items");
    const options = this.$wrapper.querySelectorAll(".select_items div");

    const toggleSelectItems = () => selectItems.classList.toggle("select_hide");
    const showSelectItems = () => selectItems.classList.remove("select_hide");
    const hideSelectItems = () => selectItems.classList.add("select_hide");

    selectedDiv.addEventListener("click", toggleSelectItems);
    select.addEventListener("focus", showSelectItems);
    select.addEventListener("blur", hideSelectItems);

    for (let i = 0; i < options.length; i++) {
      options[i].addEventListener("click", () => {
        selectedDiv.innerHTML = options[i].innerHTML;
        select.value = options[i].innerHTML;
        hideSelectItems();
      });
    }

    document.addEventListener("click", (e) => {
      /**
       * Check if the clicked element is not a descendant of the custom select menu.
       * If true, hide the select menu.
       */
      if (!e.target.closest(".custom_select")) {
        hideSelectItems();
      }
    });

    select.addEventListener("keydown", (e) => {
      if (!selectItems.classList.contains("select_hide")) {
        if (e.key === "ArrowUp" && select.selectedIndex > 0) {
          select.selectedIndex -= 1;
          selectedDiv.innerHTML = options[select.selectedIndex].innerHTML;
          e.preventDefault();
        } else if (
          e.key === "ArrowDown" &&
          select.selectedIndex < options.length - 1
        ) {
          select.selectedIndex += 1;
          selectedDiv.innerHTML = options[select.selectedIndex].innerHTML;
          e.preventDefault();
        } else if (e.key === "Enter") {
          selectedDiv.innerHTML =
            select.options[select.selectedIndex].innerHTML;
          select.value = select.options[select.selectedIndex].innerHTML;
          hideSelectItems();
        }
      }
    });
  }
}
