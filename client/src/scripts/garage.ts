import Main from '../components/Container';
import Pages from '../components/ToPage';

const body = <HTMLElement>document.querySelector('body');

function createGaragePage(): HTMLElement {
    body.appendChild(Pages())
    body.appendChild(Main())
    return body;
}

export default createGaragePage;