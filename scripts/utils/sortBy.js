function sortByLikes(medias) {
  let arr = medias;

  arr.sort((a, b) => {
    return b.likes - a.likes;
  });
}

function sortByTitle(medias) {
  let arr = medias;

  arr.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
}

function sortByDate(medias) {
  let arr = medias;

  arr.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA - dateB;
  });
}
function onSelectChange(selectElement, instancePhotograph) {
  const selectedValue = selectElement.value;
  let $parent = document.querySelector(".photograph_medias_section");
  let $articles = document.querySelectorAll(".photograph_media_item");

  $articles.forEach((article) => {
    article.remove();
  });

  instancePhotograph.createPhotographMediaContent($parent, selectedValue);
}
