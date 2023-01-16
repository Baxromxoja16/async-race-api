import Pages from "../components/ToPage";
import { carinfo } from "./interfaces";
import WinnerComponents from "../components/WinnersTable";
const body = <HTMLElement>document.querySelector("body");
function winners(data: Array<carinfo>) {
  body.innerHTML = "";
  body.appendChild(Pages());
  body.appendChild(WinnerComponents.winnerMain(data));
}
export default winners;
