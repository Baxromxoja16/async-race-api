import { mainRender } from "..";
import { CreateCars } from "../scripts/fetchApi";
import { winnerType } from "../scripts/interfaces";
import Engine from "./Engine";
import Main from "./Main";
import WinnerComponents from "./WinnersTable";

const Form = {
  createFormComponent() {
    const form = document.createElement("div");
    const create = document.createElement("div");
    const update = document.createElement("div");
    const game = document.createElement("div");

    const CrTexts = document.createElement("input");
    const CrColor = document.createElement("input");
    const UpTexts = document.createElement("input");
    const UpColor = document.createElement("input");
    const Crbutton = document.createElement("button");
    const Upbutton = document.createElement("button");

    const raceBtn: HTMLButtonElement = document.createElement("button");
    const resetBtn: HTMLButtonElement = document.createElement("button");
    const generateBtn: HTMLButtonElement = document.createElement("button");

    form.classList.add("form");

    create.classList.add("create");
    update.classList.add("update");
    game.classList.add("game");
    CrTexts.className = "inp texts cr-texts";
    UpTexts.className = "inp texts up-texts";
    CrColor.className = "inp colors cr-color";
    UpColor.className = "inp colors up-color";
    Crbutton.className = "btn btn-create";
    Upbutton.className = "btn btn-update";
    raceBtn.className = "btn race";
    resetBtn.className = "btn reset";
    generateBtn.className = "btn generate";

    CrTexts.setAttribute("type", "text");
    UpTexts.setAttribute("type", "text");
    CrColor.setAttribute("type", "color");
    UpColor.setAttribute("type", "color");

    Crbutton.innerText = "create";
    Upbutton.innerText = "update";
    raceBtn.innerText = "Race";
    resetBtn.innerText = "Reset";
    generateBtn.innerText = "genetare cars";

    raceBtn.addEventListener("click", () => {
      resetBtn.disabled = false;
      raceBtn.disabled = true;
      const startEngine = document.querySelectorAll(".start-engine");
      const stopEngine = document.querySelectorAll(".stop-engine");
      const selectBtns = document.querySelectorAll(
        ".car-span"
      ) as NodeListOf<HTMLElement>;
      let counter = 1;
      selectBtns.forEach(async (x, i) => {
        const id = Number(
          selectBtns[i].parentElement?.parentElement?.parentElement?.dataset.id
        );
        const engine = await Engine.startEngine(id, x, "started");
        engine.addEventListener("animationend", async () => {
          if (counter === 1) {
            counter++;
            const regex = engine.style.animationDuration.replace(/[s]/g, "");
            const time = Number(regex);
            const data: winnerType = { id: id, wins: 1, time: time };
            await WinnerComponents.addWinners(data);
          }
        });
        x.classList.add("active-car");
        startEngine[i].classList.remove("start-active");
        stopEngine[i].classList.add("stop-active");
      });
    });

    resetBtn.addEventListener("click", () => {
      resetBtn.disabled = true;
      raceBtn.disabled = false;
      const startEngine = document.querySelectorAll(".start-engine");
      const stopEngine = document.querySelectorAll(".stop-engine");
      const selectBtns = document.querySelectorAll(
        ".car-span"
      ) as NodeListOf<HTMLElement>;
      selectBtns.forEach(async (x, i) => {
        const id = Number(
          selectBtns[i].parentElement?.parentElement?.parentElement?.dataset.id
        );
        await Engine.startEngine(id, x, "stopped");
        x.classList.remove("active-car");
        startEngine[i].classList.add("start-active");
        stopEngine[i].classList.remove("stop-active");
      });
    });

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
    this.createNewCar(form);
    this.updateCar(form);
    this.generateCars(form);
    return form;
  },
  createNewCar(form: HTMLElement) {
    const createBtn = form.querySelector(".btn-create") as HTMLElement;
    const crTexts = form.querySelector(".cr-texts") as HTMLInputElement;
    const crColor = form.querySelector(".cr-color") as HTMLInputElement;

    createBtn.addEventListener("click", async () => {
      const body = {
        name: crTexts.value,
        color: crColor.value,
      };
      await CreateCars(body);
      mainRender();
    });
  },
  updateCar(form?: HTMLElement) {
    const updateBtn = (form as HTMLElement).querySelector(
      ".btn-update"
    ) as HTMLElement;
    const upTexts = (form as HTMLElement).querySelector(
      ".up-texts"
    ) as HTMLInputElement;
    const upColor = (form as HTMLElement).querySelector(
      ".up-color"
    ) as HTMLInputElement;
    Main.getHtmlElements(upTexts, upColor, updateBtn);
  },
  generateCars(form: HTMLElement) {
    const generate = form.querySelector(".generate");
    const names: string[] = [
      "Honda",
      "BMW",
      "Audi",
      "Telsa",
      "Chevrolet",
      "Fort",
      "Ferrari",
      "Hyundai",
      "Isuzu",
      "Jaguar",
      "Kia",
      "Lexus",
      "Lamborgini",
      "Land Rover",
      "Mazda",
      "Mercedes-Benz",
      "Moskvich",
      "Mitsubishi",
      "Nissan",
      "Porsche",
      "Rols Royce",
      "Suzuki",
      "Subaru",
      "Toyota",
      "Tank",
      "Volvo",
      "Volkswagen",
    ];
    const marks: string[] = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "i2",
      "i4",
      "i6",
      "i7",
      "X2",
      "X3",
      "X4",
      "X5",
      "X6",
      "DBX",
      "S",
      "V",
      "B",
      "D",
      "A",
      "X",
      "W3",
      "R",
      "T",
      "DBX",
    ];

    const cars: object[] = [];
    names.forEach((x) => {
      marks.forEach((y, i) => {
        const r: number = Math.floor(Math.random() * 255);
        const g: number = Math.floor(Math.random() * 255);
        const b: number = Math.floor(Math.random() * 255);
        i <= 100
          ? cars.push({ name: `${x} ${y}`, color: `rgb(${r}, ${g}, ${b})` })
          : cars;
      });
    });

    for (let i = 0; i < 10; i++) {
      cars.sort(() => Math.random() - 0.5);
    }

    generate?.addEventListener("click", async () => {
      cars.forEach(async (x: object, i) => {
        if (i < 100) {
          const cars = await CreateCars(x);
          Main.CreateMain(cars);
        }
      });
      mainRender();
    });
  },
};
export default Form;
