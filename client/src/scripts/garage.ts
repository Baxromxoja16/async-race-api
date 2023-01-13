import Main from '../components/Container';
import Pages from '../components/ToPage';
import carinfo from "./interfaces";

const body = <HTMLElement>document.querySelector('body');

function createGaragePage(data: carinfo[], getFetch?: any): HTMLElement {
    body.appendChild(Pages())
    body.appendChild(Main(data))
    return body;
}

export default createGaragePage;