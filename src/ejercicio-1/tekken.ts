import {Effectivity, Fighter} from './fighter';

type MartialArt = "Karate" | "Taekwondo" | "Capoeira" | "Boxing" |
    "Wrestling" | "Muay Thai" | "Mixed";

export class Tekken extends Fighter {
  constructor(name: string, private nacionality: string, private style: MartialArt,
      private devilGene: number, private rage: number,
      weight: number, height: number, catchingPhrase?: string) {
    super(name, 25 + (devilGene * 2 + rage), 50, 10, 110, weight, height,
        "Warrior", "Tekken", catchingPhrase);
  }

  public getNacionality(): string {
    return this.nacionality;
  }

  public getMartialArt(): string {
    return this.style;
  }

  public getDevilGene(): number {
    return this.devilGene;
  }

  public getRage(): number {
    return this.rage;
  }

  public getEffectivity(opponent: Tekken): Effectivity {
    if (this.getMartialArt() == "Taekwondo" || this.getMartialArt() == "Capoeira") {
      if (opponent.getMartialArt() == "Boxing") {
        return "Effective";
      } else if (opponent.getMartialArt() == "Wrestling") {
        return "NotEffective";
      } else {
        return "Neutral";
      }
    } else if (this.getMartialArt() == "Karate" || this.getMartialArt() == "Muay Thai" &&
        opponent.getMartialArt() == "Karate" || opponent.getMartialArt() == "Muay Thai") {
      return "Effective";
    } else {
      return "Neutral";
    }
  }
}