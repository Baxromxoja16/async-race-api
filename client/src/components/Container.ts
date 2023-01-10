import Form from './Form'
import Main from './Main'
function createContainer() {
    const container = document.createElement('div') as HTMLElement;

    container.classList.add('container');
    container.appendChild(Form())
    container.appendChild(Main())
    
    return container;
}

export default createContainer;