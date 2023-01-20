import "./styles/style.css";
import { carinfo, paginationTypeObj, winnerType } from "./scripts/interfaces";
import { getGarage, baseUrl, path, getWinners } from "./scripts/fetchApi";
import createGaragePage from "./scripts/garage";
import winners from "./scripts/winners";

// localStorage.setItem("pages", "garage");

export async function mainRender() {
  const data: Array<carinfo> = await getGarage(baseUrl, path.garage);
  createGaragePage(data);
}
export async function WinnersRender(_queryParams?: paginationTypeObj[]) {
  const data: Array<winnerType> = await getWinners(
    baseUrl,
    path.winners,
    _queryParams
  );
  winners(data);
}
const getPages = localStorage.getItem("pages");

if (getPages === "garage" || getPages === null) {
  mainRender();
} else if (getPages === "winners") {
  const pageNum = Number(localStorage.getItem("pageWinner"));
  WinnersRender([
    { key: "_page", number: pageNum },
    { key: "_limit", number: 7 },
  ]);
}
