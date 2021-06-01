const rainyBtn = document.querySelector(".rainy-days button");
const rainyParagraph = document.querySelector(".rainy-days p");
const museumBtn = document.querySelector(".museum button");
const museumParagraph = document.querySelector(".museum p");
const motofiedBtn = document.querySelector(".motofied button");
const motofiedParagraph = document.querySelector(".motofied p");
const main = document.querySelector("main");

rainyBtn.addEventListener("click", function () {
  rainyParagraph.classList.toggle("visibility");
  rainyBtn.classList.toggle("underline");
});
museumBtn.addEventListener("click", function () {
  museumParagraph.classList.toggle("visibility");
  museumBtn.classList.toggle("underline");
});
motofiedBtn.addEventListener("click", function () {
  motofiedParagraph.classList.toggle("visibility");
  motofiedBtn.classList.toggle("underline");
});
