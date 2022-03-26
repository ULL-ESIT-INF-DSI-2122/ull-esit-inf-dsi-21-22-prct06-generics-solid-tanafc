import {Effectivity, Fighter} from './fighter';

/**
 * Type that represents the posible types of the Pokemons
 */
export type pokeType = "Fire" | "Water" | "Electric" | "Plant" | "Normal";

/**
 * Class that represents a set of attributes and methods
 * for the Pokemons in the Pokemon universe.
 */
export class Pokemon extends Fighter {
  constructor(name: string, private type: pokeType,
      attack: number, defense: number, speed: number, hitPoints: number,
      weight: number, height: number, private alias?: string, catchingPhrase?: string) {
    super(name, attack, defense, speed, hitPoints, weight, height,
        "Beast", "Pokemon", catchingPhrase);
  }

  /**
   * If defined, returns the alias of the pokemon, otherwhise
   * it returns 'Este pokemon no tiene mote'.
   * @returns a string containing the alias.
   */
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

  /**
   * Method that returns the effectivity value of an attack depending
   * on the types that the Pokemons have.
   * @param opponent opponent to check the effectivity with.
   * @returns the effectivity value of an attack.
   */
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