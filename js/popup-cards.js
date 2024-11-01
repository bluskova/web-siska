const allCards = document.querySelectorAll(".one-card");
const allPopupCards = document.querySelectorAll(".overlay");
const allPopupClose = document.querySelectorAll(".overlay .close");
const allPopupLeft = document.querySelectorAll(".overlay .left");
const allPopupRight = document.querySelectorAll(".overlay .right");

const numberOfAllCards = allCards.length;

const openCard = (idx, side = 0) => {
  idx = (idx + numberOfAllCards + side) % numberOfAllCards;

  allPopupCards[idx].classList.remove("invisible");
  allPopupCards[idx].classList.add("visible");
};

const closeCard = (idx, side = 0) => {
  idx = (idx + numberOfAllCards + side) % numberOfAllCards;

  allPopupCards[idx].classList.remove("visible");
  allPopupCards[idx].classList.add("invisible");
};

allCards.forEach((oneCard, index) => {
  oneCard.addEventListener("click", () => {
    openCard(index);
  });
});

allPopupClose.forEach((oneClose, index) => {
  oneClose.addEventListener("click", () => {
    closeCard(index);
  });
});

allPopupLeft.forEach((oneLeft, index) => {
  oneLeft.addEventListener("click", () => {
    closeCard(index);
    openCard(index, -1);
  });
});

allPopupRight.forEach((oneRight, index) => {
  oneRight.addEventListener("click", () => {
    closeCard(index);
    openCard(index, +1);
  });
});
