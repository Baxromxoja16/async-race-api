import "./styles/style.css";
import { carinfo, paginationTypeObj, winnerType } from "./scripts/interfaces";
import { getGarage, baseUrl, path, getWinners } from "./scripts/fetchApi";
import createGaragePage from "./scripts/garage";
import winners from "./scripts/winners";

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

mainRender();
