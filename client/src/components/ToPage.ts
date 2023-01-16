import { mainRender, WinnersRender } from "..";
function Pages() {
  const pages = document.createElement("div");
  const toGarage = document.createElement("button");
  const toWinners = document.createElement("button");
  pages.classList.add("pages");
  toGarage.className = "btn to-garage";
  toWinners.className = "btn to-winners";
  toGarage.innerText = "To garage";
  toWinners.innerText = "To winners";
  pages.appendChild(toGarage);
  pages.appendChild(toWinners);
  toGarage.addEventListener("click", () => {
    mainRender();
  });
  toWinners.addEventListener("click", () => {
    WinnersRender();
  });
  return pages;
}
export default Pages;
