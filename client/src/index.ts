import "./styles/style.css";
import { carinfo } from "./scripts/interfaces";
import { getGarage, baseUrl, path } from "./scripts/fetchApi";
import createGaragePage from "./scripts/garage";
import winners from "./scripts/winners";

export async function mainRender() {
  const data: Array<carinfo> = await getGarage(baseUrl, path.garage);
  createGaragePage(data);
}
export async function WinnersRender() {
  const data: Array<carinfo> = await getGarage(baseUrl, path.winners);
  winners(data);
}

mainRender();
