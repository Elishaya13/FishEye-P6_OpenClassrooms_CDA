class SortBox {
  constructor() {
    this.$wrapper = document.createElement("div");
    this.$wrapper.classList.add("sort_box_container");
  }

  render() {
    this.$wrapper.innerHTML = this.getSortBoxHTML();
    this.setupCustomSelect();
    return this.$wrapper;
  }

  getSortBoxHTML() {
    return ` 
        <h4> Trier par </h4>
        <div class="custom_select">
            <select class="focusable_select" tabindex="0">
                <option value="0">Popularité</option>                
                <option value="1">Date</option>
                <option value="2">Titre</option>
            </select>
            <div class="selected_container">
              <div class="select_selected">           
              </div>
              <span class="fa-solid fa-chevron-down"></span>
            </div>            
            <div class="select_items select_hide">
              <hr class="divider">
              <div>Popularité</div>
              <hr class="divider">
              <div>Date</div>
              <hr class="divider">
              <div>Titre</div>            
            </div>
        </div>        
    `;
  }
  setupCustomSelect() {
    const select = this.$wrapper.querySelector(".custom_select select");
    const selectedDiv = this.$wrapper.querySelector(".select_selected");
    const selectItems = this.$wrapper.querySelector(".select_items");
    const options = this.$wrapper.querySelectorAll(".select_items div");
    const spanIcon = this.$wrapper.querySelector(".fa-solid");

    selectedDiv.innerHTML = options[0].innerHTML;

    const toggleSelectItems = () => {
      selectItems.classList.toggle("select_hide");
      selectItems.classList.toggle("open");
      spanIcon.classList.toggle("fa-rotate-180");
    };

    const showSelectItems = () => {
      selectItems.classList.remove("select_hide");
      spanIcon.classList.add("fa-rotate-180");
    };
    const hideSelectItems = () => {
      selectItems.classList.add("select_hide");
      selectItems.classList.remove("open");
      spanIcon.classList.remove("fa-rotate-180");
    };

    // Hide the div that contains the same content as the one displayed
    const updateSelectItemsVisibility = () => {
      const selectedContent = selectedDiv.innerHTML;
      options.forEach((option) => {
        if (option.innerHTML === selectedContent) {
          option.style.display = "none";
        } else {
          option.style.display = "block";
        }
      });
    };

    function updateDividersVisibility() {
      const dividers = selectItems.querySelectorAll(".divider");

      dividers.forEach((divider) => {
        const nextElement = divider.nextElementSibling;

        if (nextElement && nextElement.tagName === "DIV") {
          if (nextElement.style.display === "none") {
            divider.style.display = "none";
          } else {
            divider.style.display = "block";
          }
        }
      });
    }
    updateSelectItemsVisibility();
    updateDividersVisibility();

    selectedDiv.addEventListener("click", toggleSelectItems);
    select.addEventListener("focus", showSelectItems);
    select.addEventListener("blur", hideSelectItems);

    for (let i = 0; i < options.length; i++) {
      options[i].addEventListener("click", () => {
        selectedDiv.innerHTML = options[i].innerHTML;
        hideSelectItems();
        updateSelectItemsVisibility();
        updateDividersVisibility();
      });
    }

    // Adds a click event listener to the document to hide the custom select items
    // when clicking outside of the custom select element.
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".custom_select")) {
        hideSelectItems();
      }
    });

    // Keyboard navigation for accessibility
    select.addEventListener("keydown", (e) => {
      if (!selectItems.classList.contains("select_hide")) {
        if (e.key === "ArrowUp" && select.selectedIndex > 0) {
          select.selectedIndex -= 1;
          selectedDiv.innerHTML = options[select.selectedIndex].innerHTML;
          spanIcon.classList.add("fa-rotate-180");
          e.preventDefault();
        } else if (
          e.key === "ArrowDown" &&
          select.selectedIndex < options.length - 1
        ) {
          select.selectedIndex += 1;
          selectedDiv.innerHTML = options[select.selectedIndex].innerHTML;
          spanIcon.classList.add("fa-rotate-180");
          e.preventDefault();
        } else if (e.key === "Enter") {
          selectedDiv.innerHTML =
            select.options[select.selectedIndex].innerHTML;
          select.value = select.options[select.selectedIndex].innerHTML;
          spanIcon.classList.remove("fa-rotate-180");
          hideSelectItems();
        }

        updateSelectItemsVisibility();
        updateDividersVisibility();
      }
    });
  }
}
