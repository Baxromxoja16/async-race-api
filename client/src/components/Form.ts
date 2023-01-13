import Main from "./Main";

const Form = {
    createFormComponent() {
        const form = document.createElement('div');
        const create = document.createElement('div');
        const update = document.createElement('div');
        const game = document.createElement('div');

        const CrTexts = document.createElement('input');
        const CrColor = document.createElement('input');
        const UpTexts = document.createElement('input');
        const UpColor = document.createElement('input');
        const Crbutton = document.createElement('button');
        const Upbutton = document.createElement('button');

        const raceBtn = document.createElement('button');
        const resetBtn = document.createElement('button');
        const generateBtn = document.createElement('button');


        form.classList.add('form');

        create.classList.add('create');
        update.classList.add('update');
        game.classList.add('game');
        CrTexts.className = 'inp texts cr-texts';
        UpTexts.className = 'inp texts up-texts';
        CrColor.className = 'inp colors cr-color';
        UpColor.className = 'inp colors up-color';
        Crbutton.className = 'btn btn-create';
        Upbutton.className = 'btn btn-update';
        raceBtn.className = 'btn race';
        resetBtn.className = 'btn reset';
        generateBtn.className = 'btn generate';

        CrTexts.setAttribute('type', 'text');
        UpTexts.setAttribute('type', 'text');
        CrColor.setAttribute('type', 'color');
        UpColor.setAttribute('type', 'color');

        Crbutton.innerText = 'create';
        Upbutton.innerText = 'update';
        raceBtn.innerText = 'Race';
        resetBtn.innerText = 'Reset';
        generateBtn.innerText = 'genetare cars';

        create.appendChild(CrTexts);
        create.appendChild(CrColor);
        create.appendChild(Crbutton);
        update.appendChild(UpTexts);
        update.appendChild(UpColor);
        update.appendChild(Upbutton);
        game.appendChild(raceBtn);
        game.appendChild(resetBtn);
        game.appendChild(generateBtn);

        form.appendChild(create);
        form.appendChild(update);
        form.appendChild(game);
        this.createNewCar(form)
        this.updateCar(form)
        this.generateCars(form)
        return form;
    },
    createNewCar(form: HTMLElement) {
        const createBtn = (form.querySelector('.btn-create') as HTMLElement)
        const crTexts = (form.querySelector('.cr-texts') as HTMLInputElement)
        const crColor = (form.querySelector('.cr-color') as HTMLInputElement)

        createBtn.addEventListener('click', async (e) => {
            await fetch('http://localhost:3000/garage', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: crTexts.value,
                    color: crColor.value,
                })
            })
                .catch((error) => {
                    console.error('Error:', error);
                });
            location.reload()

        })
    },
    updateCar(form?: HTMLElement) {
        const updateBtn = ((form as HTMLElement).querySelector('.btn-update') as HTMLElement)
        const upTexts = ((form as HTMLElement).querySelector('.up-texts') as HTMLInputElement)
        const upColor = ((form as HTMLElement).querySelector('.up-color') as HTMLInputElement)
        Main.getHtmlElements(upTexts, upColor, updateBtn)
    },
    generateCars(form: HTMLElement) {
        const generate = form.querySelector('.generate')

        const names: string[] = ['Honda', 'BMW', 'Audi', 'Telsa', 'Chevrolet', 'Fort', 'Ferrari', 'Hyundai', 'Isuzu', 'Jaguar', 'Kia', 'Lexus', 'Lamborgini', 'Land Rover', 'Mazda', 'Mercedes-Benz', 'Moskvich', 'Mitsubishi', 'Nissan', 'Porsche', 'Rols Royce', 'Suzuki', 'Subaru', 'Toyota', 'Tank', 'Volvo', 'Volkswagen',];

        const marks: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'i2', 'i4', 'i6', 'i7', 'X2', 'X3', 'X4', 'X5', 'X6', 'DBX', 'S', 'V', 'B', 'D', 'A', 'X', 'W3', 'R', 'T', 'DBX'];

        const cars: object[] = [];
        names.forEach(x => {
            marks.forEach(y => {
                let r: number = Math.floor(Math.random() * 255);
                let g: number = Math.floor(Math.random() * 255);
                let b: number = Math.floor(Math.random() * 255);
                cars.push({ name: `${x} ${y}`, color: `rgb(${r}, ${g}, ${b})` })
            })
        })

        for (let i = 0; i < 10; i++) {
            cars.sort((x, y) => Math.random() - 0.5);
        }

        generate?.addEventListener('click', async () => {
            cars.forEach(async (x, i) => {
                if (i < 100) {
                    await fetch('http://localhost:3000/garage', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(x)
                    })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                }
                location.reload()
            })
        })
    }
}
export default Form;