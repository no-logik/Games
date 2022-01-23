const blocks = document.querySelectorAll(".col");

blocks.forEach((element, index) => {
  if (index % 2 == 0) {
    element.classList.add("black-bg");
  }
});

const boardPieces = document.querySelectorAll(".board-piece");
