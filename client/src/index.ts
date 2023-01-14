import './styles/style.css';
import { carinfo } from "./scripts/interfaces";
import Form from './components/Form';
// import garage from './scripts/garage'
import { getGarage, baseUrl, path } from './scripts/fetchApi'
import createGaragePage from './scripts/garage'


const body = <HTMLElement>document.querySelector('body');

Form.createFormComponent();
export async function mainRender() {
    const data: Array<carinfo> = await getGarage(baseUrl, path.garage)
    createGaragePage(data)
}
mainRender()


// document.addEventListener('DOMContentLoaded', async () => {
//     Form.createFormComponent();
//     const response = await fetch('http://localhost:3000/garage')
//     const data: carinfo[] = await response.json()
// })

// function garage() {
//     fetch('http://localhost:3000/garage')
//     .then(data => {
//         return data.json()
//     })
//     .then(data => {
//         data.forEach((element: carinfo) => {
//             (document.querySelector('.main') as HTMLElement).innerHTML += `( ${element.name}  ${element.id}  ${element.color}) `
//             console.log(element);
//         });
//     })
// }

// garage()