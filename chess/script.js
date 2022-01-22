const blocks = document.querySelectorAll(".col");

const rown = document.querySelectorAll(".row");

blocks.forEach((element, index) => {
  if (index % 2 == 0) {
    element.classList.add("black-bg");
  }
});
