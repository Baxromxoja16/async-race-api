import './styles/style.css';
import { carinfo, paginationTypeObj } from "./scripts/interfaces";
import Form from './components/Form';
import { getGarage, baseUrl, path } from './scripts/fetchApi';
import createGaragePage from './scripts/garage';
import Main from './components/Main';

Form.createFormComponent();

export async function mainRender() {
    const data: Array<carinfo> = await getGarage(baseUrl, path.garage)
    createGaragePage(data)
};

mainRender();