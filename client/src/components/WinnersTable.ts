import { baseUrl, getGarage, path } from "../scripts/fetchApi";
import { carinfo } from "../scripts/interfaces";

const WinnerComponents = {
  winnerMain(data: Array<carinfo>) {
    const main: HTMLElement = document.createElement("div");
    const title: HTMLElement = document.createElement("h1");
    const pageNum: HTMLElement = document.createElement("p");
    const btnNext: HTMLElement = document.createElement("button");
    const btnPrev: HTMLElement = document.createElement("button");
    const mainParent: HTMLElement = document.createElement("div");
    const table: HTMLElement = document.createElement("table");
    const tr: HTMLElement = document.createElement("tr");
    const b: number = Number(localStorage.getItem("pageNumWin"))
      ? Number(localStorage.getItem("pageNumWin"))
      : 0;

    main.classList.add("main");
    mainParent.classList.add("parent-main");
    title.classList.add("title");
    pageNum.classList.add("page-num");
    table.classList.add("winners-info");

    title.innerText = `Winners (${data.length})`;
    pageNum.innerText = `Page #${b + 1}`;
    btnNext.innerText = "Next";
    btnPrev.innerText = "Prev";
    const infoArr: string[] = [
      "Number",
      "Car",
      "Name",
      "Wins",
      "Best Time (seconds)",
    ];

    for (let i = 0; i < infoArr.length; i++) {
      const th: HTMLElement = document.createElement("th");
      th.innerText = infoArr[i];
      tr.appendChild(th);
    }
    console.log(data.forEach((x, i) => this.createWinnerList(x, i)));

    table.appendChild(tr);
    // table.appendChild()
    main.appendChild(title);
    main.appendChild(pageNum);

    main.appendChild(btnPrev);
    main.appendChild(btnNext);
    main.appendChild(mainParent);
    main.appendChild(table);

    return main;
  },
  async createWinnerList(data: carinfo, i: number) {
    const tr: HTMLElement = document.createElement("tr");

    const cars = await getGarage(baseUrl, path.garage);

    const found = cars.filter((val) => val.id === data.id);

    const propertyy = { ...data, ...found[0] };
    for (const key in propertyy) {
      console.log(key);
      const td: HTMLElement = document.createElement("td");
      if (key === "color") {
        td.innerHTML = `
                        <svg width="64px" height="64px" viewBox="0 0 400 400" style='stroke: ${propertyy[key]} ' fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    `;
        tr.appendChild(td);
      } else if (key === "name") {
        td.innerText = propertyy[key];
        tr.appendChild(td);
      }
      // else if(key === 'wins'){
      //     td.innerText = `${propertyy[key]}`
      //     tr.appendChild(td)
      // }
      // else if(key === 'color'){}
    }
    console.log(tr);
    return tr;
  },
};
export default WinnerComponents;
