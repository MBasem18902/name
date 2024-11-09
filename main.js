function decreaseCount(button) {
  const card = button.parentElement;
  let count = parseInt(card.getAttribute("data-count"));
  if (count > 0) {
    count -= 1;
    card.setAttribute("data-count", count);
    card.querySelector(".count").innerText = count;

    if (count === 0) {
      card.querySelector(".count").style.display = "none";
      button.style.display = "none";
    }
  }
}

// Hide the "التكرار" button if the initial count is 1 or less
document.querySelectorAll(".card").forEach((card) => {
  const count = parseInt(card.getAttribute("data-count"));
  const button = card.querySelector(".button");
  if (count <= 1) {
    button.style.display = "none";
  }
});
