import './styles/style.css';
import carinfo from "./scripts/interfaces";
import createFormComponent from './components/Form';
import garage from './scripts/garage'

document.addEventListener('DOMContentLoaded', () => {
    createFormComponent();
    garage()
})


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