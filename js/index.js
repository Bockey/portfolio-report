const rainyBtn = document.querySelector(".rainy-days button");
const rainySection = document.querySelector(".rainy-days section");
const museumBtn = document.querySelector(".museum button");
const museumSection = document.querySelector(".museum section");
const motofiedBtn = document.querySelector(".motofied button");
const motofiedSection = document.querySelector(".motofied section");
const main = document.querySelector("main");

rainyBtn.addEventListener("click", function () {
  rainySection.classList.toggle("visibility");
  rainyBtn.classList.toggle("underline");
});
museumBtn.addEventListener("click", function () {
  museumSection.classList.toggle("visibility");
  museumBtn.classList.toggle("underline");
});
motofiedBtn.addEventListener("click", function () {
  motofiedSection.classList.toggle("visibility");
  motofiedBtn.classList.toggle("underline");
});
