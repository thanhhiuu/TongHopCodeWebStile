const filterButton = document.querySelectorAll(".filter button");
const filterCard = document.querySelectorAll(".filter-img .card");

// console.log(filterButton, filterCard);
const filterClick = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
  // console.log(e.target);

  filterCard.forEach((card) => {
    card.classList.add("hide");
    // Click chuyển đổi
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    }
  });
};

filterButton.forEach((button) => {
  button.addEventListener("click", filterClick);    
});

