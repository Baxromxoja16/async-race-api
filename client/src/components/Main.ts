import { getGarage, baseUrl, path, UpdateCar, DeleteCar } from "../scripts/fetchApi";
import { carinfo, paginationTypeObj } from "../scripts/interfaces";
import { mainRender } from "../index";

const Main = {
    createCars(data: carinfo) {
        const mainCars = document.createElement('div');
        const car = document.createElement('div');
        const btnsSetting = document.createElement('div');
        const select = document.createElement('button');
        const remove = document.createElement('button');
        const carName = document.createElement('span');
        const road = document.createElement('div');
        const carSpan = document.createElement('span');
        const flag = document.createElement('span');
        const startEngine: HTMLElement = document.createElement('button')
        const stopEngine: HTMLElement = document.createElement('button')

        mainCars.classList.add('main-cars');
        mainCars.setAttribute('data-id', `${data.id}`);
        btnsSetting.classList.add('btns-setting');
        select.classList.add('select');
        remove.classList.add('remove');
        carName.classList.add('car-name');
        car.classList.add('car');
        road.classList.add('road');
        carSpan.classList.add('car-span');
        flag.classList.add('flag');

        startEngine.classList.add('start-engine')
        stopEngine.classList.add('stop-engine')
        // stopEngine.classList.add('stop-active')
        startEngine.classList.add('start-active')

        startEngine.innerText = 'A'
        stopEngine.innerText = 'B'

        select.innerText = 'Select';
        remove.innerText = 'Remove';
        carName.innerText = `${data.name}`;
        carSpan.innerHTML = `
        <svg width="64px" height="64px" viewBox="0 0 400 400" style='stroke: ${data.color} ' fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M47 232.735C48.4246 221.084 48.7322 209.254 49.8438 197.66" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M55.168 192.264C94.3021 170.326 238.898 95.2264 246.732 181.436" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M75.4033 195.607C120.206 186.193 361.578 139.763 344.331 235.433" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M322.277 244.876C332.859 243.916 342.827 239.677 353.305 238.131" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M268.316 227.65C273.344 223.411 276.541 214.633 283.581 213.083C309.001 207.493 331.57 243.568 304.852 256.789C281.398 268.387 260.878 243.015 277.586 224.415" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M79.5169 226.914C110.155 175.735 153.384 245.823 109.035 258.807C90.5036 264.232 70.4089 244.217 83.8087 229.115" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M258.873 239.059C190.155 241.806 116.847 229.997 48.4229 235.624" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M352.003 219.244C351.792 226.929 352.003 234.736 352.003 242.178" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
        </svg>
        `
        flag.innerHTML = `
        <svg width="64px" height="64px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <g id="icomoon-ignore"> </g>
                <path d="M25.596 4.602l-0.709 0.247c-0.019 0.006-1.939 0.664-4.976 0.664-1.547 0-3.021-0.314-4.445-0.617-1.441-0.307-2.931-0.625-4.508-0.625-3.146 0-4.212 0.675-4.324 0.752l-0.23 0.159v22.547h1.066v-10.196c0.424-0.166 1.465-0.461 3.487-0.461 1.465 0 2.835 0.292 4.286 0.601 1.479 0.316 3.008 0.641 4.667 0.641 3.233 0 5.245-0.695 5.33-0.724l0.356-0.125-0-12.864zM24.53 16.691c-0.69 0.188-2.34 0.558-4.62 0.558-1.547 0-3.021-0.314-4.445-0.618-1.441-0.307-2.931-0.625-4.508-0.625-1.727 0-2.828 0.204-3.487 0.4v-10.609c0.427-0.166 1.47-0.46 3.487-0.46 1.465 0 2.835 0.292 4.286 0.601 1.479 0.315 3.008 0.641 4.667 0.641 2.148 0 3.756-0.307 4.62-0.521v10.632z" fill="#000000"> </path>
            </g>
        </svg>
        `
        // this.engine(data, data.id, startEngine, stopEngine, carSpan)
        road.appendChild(startEngine)
        road.appendChild(stopEngine)
        road.appendChild(carSpan);
        road.appendChild(flag);
        btnsSetting.appendChild(select);
        btnsSetting.appendChild(remove);
        btnsSetting.appendChild(carName);
        car.appendChild(btnsSetting);
        car.appendChild(road);
        mainCars.appendChild(car);
        return mainCars;
    },
    CreateMain(data: Array<carinfo>): HTMLElement {
        const main: HTMLElement = document.createElement('div');
        const title: HTMLElement = document.createElement('h1');
        const pageNum: HTMLElement = document.createElement('p');
        const btnNext: HTMLElement = document.createElement('button')
        const btnPrev: HTMLElement = document.createElement('button')

        const mainParent: HTMLElement = document.createElement('div');
        let b: number = Number(localStorage.getItem('pageNum')) ? Number(localStorage.getItem('pageNum')) : 0

        main.classList.add('main');
        mainParent.classList.add('parent-main');
        title.classList.add('title');
        pageNum.classList.add('page-num');

        b > 1 ? btnNext.classList.add('active') : btnNext
        b > 1 ? btnPrev.classList.add('active') : btnPrev
        data.length > 10 ? btnNext.classList.add('active') : btnNext
        
        btnNext.innerText = 'Next'
        btnPrev.innerText = 'Prev'

        // pagination  started
        let dataSort: carinfo[][] = [[]]
        let a: number = 0
        for (let i: number = 0; i < data.length; i++) {
            if (dataSort[a].length < 10) {
                dataSort[a].push(data[i])
            } else if (dataSort[a].length === 10) {
                dataSort.push([data[i]])
                a++
            }
        }
        
        const asd = (b: number) => {
            for (let j: number = 0; j < dataSort[b].length; j++) {
                if (dataSort[b].length > j) {
                    mainParent.appendChild(this.createCars(dataSort[b][j]))
                }
            }
        }
        asd(b)

        btnNext.addEventListener('click', () => {
            b < dataSort.length - 1 ? b++ : b = dataSort.length - 1
            pageNum.innerText = `Page #${b + 1}`;
            b !== dataSort.length - 1 ? btnNext.classList.add('active') : btnNext.classList.remove('active')
            b !== 0 ? btnPrev.classList.add('active') : btnPrev.classList.remove('active')
            localStorage.setItem('pageNum', `${b}`)
            mainParent.innerHTML = ''
            asd(b)
        })
        btnPrev.addEventListener('click', () => {
            b <= 0 ? b = 0 : b--
            pageNum.innerText = `Page #${b + 1}`;
            b !== dataSort.length - 1 ? btnNext.classList.add('active') : btnNext.classList.remove('active')
            b !== 0 ? btnPrev.classList.add('active') : btnPrev.classList.remove('active')
            localStorage.setItem('pageNum', `${b}`)
            mainParent.innerHTML = ''
            asd(b)
        })

        title.innerText = `Garage (${data.length})`;
        pageNum.innerText = `Page #${b + 1}`;

        main.appendChild(title);
        main.appendChild(pageNum);

        main.appendChild(btnPrev);
        main.appendChild(btnNext);
        main.appendChild(mainParent);
        this.removeCar(main)
        return main;
    },
    removeCar(mainCars: HTMLElement) {
        const mainCar = (mainCars.querySelectorAll('.main-cars') as NodeListOf<Element>);
        const cars = (mainCars.querySelectorAll('.remove') as NodeListOf<Element>)
        cars.forEach((el, i) => {
            el.addEventListener('click', async (e) => {
                const id: number = Number((mainCar[i] as HTMLElement).dataset.id)
                const deleteCar = await DeleteCar(id)
                mainRender()
            })
        })
    },
    async getHtmlElements(text: HTMLInputElement, color: HTMLInputElement, btn: HTMLElement) {
        const data: carinfo[] = await getGarage(baseUrl, path.garage)

        const selects = document.querySelectorAll('.select');
        selects.forEach((el) => {
            el.addEventListener('click', () => {
                const id = Number((el.parentNode?.parentNode?.parentNode as HTMLElement).dataset.id)

                const found = data.filter((x: carinfo) => x.id === id)

                text.value = found[0].name
                color.value = found[0].color

                btn.addEventListener('click', async (e) => {
                    const body = {
                        name: text.value,
                        color: color.value,
                    };
                    const postGarage = await UpdateCar(found[0].id, body);
                    mainRender()
                    return postGarage;
                })
            })
        })
    },
    engine(data: carinfo, id: number, startEngine: HTMLElement, stopEngine: HTMLElement, carSpan: HTMLElement) {
        startEngine.addEventListener('click', () => {
            startEngine.classList.remove('start-active')
            stopEngine.classList.add('stop-active')
            carSpan.classList.add('active-car')
            this.engineFetch(id, 'started', carSpan)
        })
        stopEngine.addEventListener('click', () => {
            stopEngine.classList.remove('stop-active')
            startEngine.classList.add('start-active')
            carSpan.classList.remove('active-car')
            this.engineFetch(id, 'stopped', carSpan)
        })
    },
    async engineFetch(id: number, query: string, carSpan: HTMLElement) {
        const response = await fetch(`http://localhost:3000/engine?id=${id}&status=${query}`, { method: 'PATCH' })
        const data = await response.json()
        console.log(data);
    },

}
export default Main