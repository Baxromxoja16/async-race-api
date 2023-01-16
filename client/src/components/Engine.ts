import { baseUrl, engineStart, getGarage, path } from "../scripts/fetchApi";
import { engineQueryParams } from "../scripts/interfaces";

const Engine = {
    async startEngine() {
        const engine = await engineStart(baseUrl, path.engine, 2, 'started')
        console.log(engine);
        console.log(document.querySelector('.start-engine'));
    },
    startEngined() {
        console.log(document.querySelector('.start-engine'));
    }
}
setTimeout(() => {
    Engine.startEngine()
}, 1000);

export default Engine;