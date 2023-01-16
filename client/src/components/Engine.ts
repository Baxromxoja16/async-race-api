import { baseUrl, engineStart, getGarage, path } from "../scripts/fetchApi";
import { engineQueryParams } from "../scripts/interfaces";

const Engine = {
    async startEngine() {
        const engine = await engineStart(baseUrl, path.engine, 4, 'started')
        console.log(engine);
    },
    
}

export default Engine;