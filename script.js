"use strict";
let allBtnEl = document.querySelectorAll(".btn");
const mainEl = document.querySelector(".rating-card");
const containerEL = document.querySelector(".container");
const pMessageEl = document.querySelector(".message");
const submitBtnEl = document.querySelector(".submit-btn");
const closeBtnEl = document.querySelector(".close");

let rating;
let clicked = false;

for (let i = 0; i < allBtnEl.length; i++) {
  allBtnEl[i].addEventListener("click", function () {
    rating = Number(allBtnEl[i].textContent);
    clicked = true;
  });
}

submitBtnEl.addEventListener("click", function () {
  if (clicked === true) {
    pMessageEl.textContent = `You selected ${rating} out of ${allBtnEl.length}`;
    mainEl.classList.add("hidden");
    containerEL.classList.remove("hidden");
  }
});

closeBtnEl.addEventListener("click", function () {
  mainEl.classList.remove("hidden");
  containerEL.classList.add("hidden");
  clicked = false;
});
