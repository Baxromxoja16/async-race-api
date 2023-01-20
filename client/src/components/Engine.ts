import { baseUrl, engineDrive, engineStart, path } from "../scripts/fetchApi";

const Engine = {
  async startEngine(id: number, carSpan: HTMLElement, status: string) {
    const engine = await engineStart(baseUrl, path.engine, id, status);

    const transition = engine.distance / engine.velocity / 360;
    carSpan.style.animationDuration = `${transition}s`;
    setTimeout(async () => {
      const driveEngine = await engineDrive(baseUrl, path.engine, id, "drive");
      if (driveEngine === 500) {
        // carSpan.style.animation = "infinite alternate slidein2";
        carSpan.style.animationPlayState = "paused";
      }
    }, 1000);
    return carSpan;
  },
};

export default Engine;
