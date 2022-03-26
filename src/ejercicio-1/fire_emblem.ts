import {Effectivity, Fighter} from './fighter';

/**
 * Type that defines the weapons of the heroes of FE.
 */
type weaponType = "Axe" | "Sword" | "Spear";

/**
 * Class that represents fighters of the universe of Fire Emblem. It
 * defines significant attributes of this world.
 */
export class FireEmblem extends Fighter {
  constructor(hero: string, private weapon: weaponType,
      attack: number, defense: number, speed: number, hitPoints: number,
      weight: number, height: number, private mount: boolean, catchingPhrase?: string) {
    super(hero, mount ? attack * 0.5 : attack, mount ? defense * 2 : defense, mount ? speed * 3 : speed,
        mount ? hitPoints * 2 : hitPoints, weight, height, "Warrior", "FireEmblem", catchingPhrase);
  }

  /**
   * Returns the weapon that the hero uses.
   * @returns the weapon as a string.
   */
  public getWeapon(): weaponType {
    return this.weapon;
  }

  /**
   * Returns true if the unit is mounted.
   * @returns boolean value.
   */
  public isMounted(): boolean {
    return this.mount;
  }

  /**
   * Establishes the effectivity triangle between weapons in the universe,
   * returning the Effectivity value.
   * @param opponent opponent to check the effectivity depending on his weapon.
   * @returns the effectivity value of the attack.
   */
  public getEffectivity(opponent: FireEmblem): Effectivity {
    let typeAdvantage: Effectivity;

    switch (this.getWeapon()) {
      case "Sword":
        if (opponent.getWeapon() == "Spear") {
          typeAdvantage = "NotEffective";
        } else if (opponent.getWeapon() == "Axe") {
          typeAdvantage = "Effective";
        } else {
          typeAdvantage = "Neutral";
        }
        break;

      case "Spear":
        if (opponent.getWeapon() == "Sword") {
          typeAdvantage = "Effective";
        } else if (opponent.getWeapon() == "Axe") {
          typeAdvantage = "NotEffective";
        } else {
          typeAdvantage = "Neutral";
        }
        break;

      case "Axe":
        if (opponent.getWeapon() == "Spear") {
          typeAdvantage = "Effective";
        } else if (opponent.getWeapon() == "Sword") {
          typeAdvantage = "NotEffective";
        } else {
          typeAdvantage = "Neutral";
        }
    }
    return typeAdvantage;
  }
}