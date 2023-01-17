import { baseUrl, engineDrive, engineStart, path } from "../scripts/fetchApi";

const Engine = {
  async startEngine(id: number, carSpan: HTMLElement, status: string) {
    const engine = await engineStart(baseUrl, path.engine, id, status);
    const transition = engine.distance / engine.velocity / 60;
    carSpan.style.transition = `${transition}s`;
    const driveEngine = await engineDrive(baseUrl, path.engine, id, "drive");
    if (driveEngine === 500) {
      carSpan.style.transition = "0s";
    }
  },
};

export default Engine;
