
function createFormComponent() {
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
    CrTexts.className = 'inp texts';
    UpTexts.className = 'inp texts';
    CrColor.className = 'inp colors';
    UpColor.className = 'inp colors';
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
    return form;
}

export default createFormComponent;