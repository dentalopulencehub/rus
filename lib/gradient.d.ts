export class Gradient {
  el: HTMLCanvasElement;
  conf: { playing: boolean };
  initGradient(selector: string): this;
  play(): void;
  pause(): void;
  disconnect(): void;
  toggleColor(index: number): void;
  updateFrequency(freq: number): void;
}
