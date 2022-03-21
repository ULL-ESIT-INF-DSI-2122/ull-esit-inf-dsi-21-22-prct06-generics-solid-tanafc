import {Fighter} from './fighter';

type fightStyle = "Karate" | "Taekwondo" | "Capoeira" | "Boxing" |
    "Wrestling" | "Muay Thai" | "Mixed";

export class Tekken extends Fighter {
  constructor(name: string, private nacionality: string, private style: fightStyle,
      private devilGene: number, private rage: number,
      weight: number, height: number, catchingPhrase?: string) {
    super(name, 25 + (devilGene * 2 + rage), 50, 10, 110, weight, height, catchingPhrase);
  }

  public getNacionality(): string {
    return this.nacionality;
  }

  public getFightingSyle(): string {
    return this.style;
  }

  public getDevilGene(): number {
    return this.devilGene;
  }

  public getRage(): number {
    return this.rage;
  }

  public getEffectivity(): number {
    return 0;
  }
}