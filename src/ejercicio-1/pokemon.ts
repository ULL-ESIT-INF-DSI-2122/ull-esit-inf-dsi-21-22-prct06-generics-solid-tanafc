import {Effectivity, Fighter} from './fighter';

export type pokeType = "Fire" | "Water" | "Electric" | "Plant" | "Normal";

export class Pokemon extends Fighter {
  constructor(name: string, private type: pokeType,
      attack: number, defense: number, speed: number, hitPoints: number,
      weight: number, height: number, private alias?: string, catchingPhrase?: string) {
    super(name, attack, defense, speed, hitPoints, weight, height,
        "Beast", "Pokemon", catchingPhrase);
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

  public getEffectivity(opponent: Pokemon): Effectivity {
    switch (this.getType()) {
      case "Fire":
        if (opponent.getType() == "Fire" || opponent.getType() == "Water") {
          return "NotEffective";
        } else if (opponent.getType() == "Plant") {
          return "Effective";
        } else {
          return "Neutral";
        }
      case "Water":
        if (opponent.getType() == "Water" || opponent.getType() == "Plant" ||
            opponent.getType() == "Electric") {
          return "NotEffective";
        } else if (opponent.getType() == "Fire") {
          return "Effective";
        } else {
          return "Neutral";
        }
      case "Electric":
        if (opponent.getType() == "Electric") {
          return "NotEffective";
        } else if (opponent.getType() == "Water") {
          return "Effective";
        } else {
          return "Neutral";
        }
      case "Plant":
        if (opponent.getType() == "Plant" || opponent.getType() == "Fire") {
          return "NotEffective";
        } else if (opponent.getType() == "Water") {
          return "Effective";
        } else {
          return "Neutral";
        }
      case "Normal":
        return "Neutral";
    }
  }
}