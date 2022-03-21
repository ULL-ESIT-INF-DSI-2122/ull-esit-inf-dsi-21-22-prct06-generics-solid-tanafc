import {Fighter} from './fighter';

export type pokeType = "Fire" | "Water" | "Electric" | "Plant";

export class Pokemon extends Fighter {
  constructor(name: string, private type: pokeType,
      attack: number, defense: number, speed: number, hitPoints: number,
      weight: number, height: number, private alias?: string, catchingPhrase?: string) {
    super(name, attack, defense, speed, hitPoints, weight, height, catchingPhrase);
  }

  public getAlias(): string {
    if (this.alias) {
      return this.alias;
    }
    return "Este pokemon no tiene un mote";
  }

  public setAlias(name: string) {
    this.alias = name;
  }

  public getType(): pokeType {
    return this.type;
  }

  public getEffectivity(): number {
    return 0;
  }
}
