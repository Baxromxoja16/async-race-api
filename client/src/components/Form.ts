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
            location.reload();
        })
    },
    updateCar(form?: HTMLElement) {
        const updateBtn = ((form as HTMLElement).querySelector('.btn-update') as HTMLElement)
        const upTexts = ((form as HTMLElement).querySelector('.up-texts') as HTMLInputElement)
        const upColor = ((form as HTMLElement).querySelector('.up-color') as HTMLInputElement)
        Main.getHtmlElements(upTexts, upColor, updateBtn)
    },
    getId(id: string | undefined) {
        return id;
    }
}

export default Form;