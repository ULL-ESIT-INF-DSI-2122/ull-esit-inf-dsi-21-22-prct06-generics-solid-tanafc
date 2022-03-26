import {Effectivity, Fighter} from './fighter';

/**
 * Type that defines a set of martial arts.
 */
type MartialArt = "Karate" | "Taekwondo" | "Capoeira" | "Boxing" |
    "Wrestling" | "Muay Thai" | "Mixed";

/**
 * Class that defines fighters of the Tekken universe. It has a set
 * of attributes and methods representative of this world.
 */
export class Tekken extends Fighter {
  constructor(name: string, private nacionality: string, private style: MartialArt,
      private devilGene: number, private rage: number,
      weight: number, height: number, catchingPhrase?: string) {
    super(name, 25 + (devilGene * 2 + rage), 50, 10, 110, weight, height,
        "Warrior", "Tekken", catchingPhrase);
  }

  /**
   * Returns the nacionality of the fighter.
   * @returns the nacionality of the fighter.
   */
  public getNacionality(): string {
    return this.nacionality;
  }

  /**
   * Returns the martial art of the fighter.
   * @returns the type of martial art of the fighter.
   */
  public getMartialArt(): string {
    return this.style;
  }

  /**
   * Returns the value of the devil gene that some
   * fighters of the universe possess.
   * @returns the devil gene stat.
   */
  public getDevilGene(): number {
    return this.devilGene;
  }

  /**
   * Returns the rage stat of the fighter
   * @returns the rage stat value.
   */
  public getRage(): number {
    return this.rage;
  }

  /**
   * Method that returns the effectivity value of an attack depending
   * on the type of martial art that the character practice.
   * @param opponent opponent to check the effectivity with.
   * @returns the effectivity value of an attack.
   */
  public getEffectivity(opponent: Tekken): Effectivity {
    if (this.getMartialArt() == "Taekwondo" || this.getMartialArt() == "Capoeira") {
      if (opponent.getMartialArt() == "Boxing") {
        return "Effective";
      } else if (opponent.getMartialArt() == "Wrestling") {
        return "NotEffective";
      } else {
        return "Neutral";
      }
    } else if ((this.getMartialArt() == "Karate" || this.getMartialArt() == "Muay Thai") &&
        (opponent.getMartialArt() == "Karate" || opponent.getMartialArt() == "Muay Thai")) {
      return "Effective";
    } else {
      return "Neutral";
    }
  }
}