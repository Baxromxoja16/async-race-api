import { baseUrl, engineStart, path } from "../scripts/fetchApi";

const Engine = {
  async startEngine(id: number, carSpan: HTMLElement, status: string) {
    const engine = await engineStart(baseUrl, path.engine, id, status);
    const transition = engine.distance / engine.velocity / 3600;
    carSpan.style.transition = `${transition}s`;
  },
};

export default Engine;
