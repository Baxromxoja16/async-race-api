import carinfo from '../scripts/interfaces';
import Form from './Form'
import Main from './Main'
function createContainer(data: carinfo[]) {
    const container = document.createElement('div') as HTMLElement;
    container.classList.add('container');
    container.appendChild(Form.createFormComponent())
    container.appendChild(Main.CreateMain(data))
    // container.appendChild(Main.engine(data))
    
    return container;
}

export default createContainer;