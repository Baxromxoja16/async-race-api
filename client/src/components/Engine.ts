import { baseUrl, engineStart, getGarage, path } from "../scripts/fetchApi";
import { engineQueryParams } from "../scripts/interfaces";

const Engine = {
    async startEngine(id: number, carSpan: HTMLElement, status: string) {
        const engine = await engineStart(baseUrl, path.engine, id, status)
        const transition = (engine.distance/engine.velocity) / 3600
        carSpan.style.transition = `${transition}s`
    },
}

export default Engine;