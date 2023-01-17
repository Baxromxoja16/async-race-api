import Pages from "../components/ToPage";
import { carinfo } from "./interfaces";
import WinnerComponents from "../components/WinnersTable";
const body = <HTMLElement>document.querySelector("body");
async function winners(data: Array<carinfo>) {
  body.innerHTML = "";
  body.appendChild(Pages());
  body.appendChild(await WinnerComponents.winnerMain(data));
}
export default winners;
