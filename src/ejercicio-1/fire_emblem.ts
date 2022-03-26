import {Effectivity, Fighter} from './fighter';

type weaponType = "Axe" | "Sword" | "Spear";

export class FireEmblem extends Fighter {
  constructor(hero: string, private weapon: weaponType,
      attack: number, defense: number, speed: number, hitPoints: number,
      weight: number, height: number, private mount: boolean, catchingPhrase?: string) {
    super(hero, mount ? attack * 0.5 : attack, mount ? defense * 2 : defense, mount ? speed * 3 : speed,
        mount ? hitPoints * 2 : hitPoints, weight, height, "Warrior", "FireEmblem", catchingPhrase);
  }

  public getWeapon(): weaponType {
    return this.weapon;
  }

  public isMounted(): boolean {
    return this.mount;
  }

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