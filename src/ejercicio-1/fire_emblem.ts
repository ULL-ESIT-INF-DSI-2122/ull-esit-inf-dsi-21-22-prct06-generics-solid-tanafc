import {Fighter} from './fighter';

type weaponType = "Axe" | "Sword" | "Spear";

export class FireEmblem extends Fighter {
  constructor(hero: string, private weapon: weaponType,
      attack: number, defense: number, speed: number, hitPoints: number,
      weight: number, height: number, private mount: boolean, catchingPhrase?: string) {
    super(hero, mount ? attack * 0.5 : attack, mount ? defense * 2 : defense, mount ? speed * 3 : speed,
        mount ? hitPoints * 2 : hitPoints, weight, height, catchingPhrase);
  }

  public getWeapon(): weaponType {
    return this.weapon;
  }

  public isMounted(): boolean {
    return this.mount;
  }

  public getEffectivity(): number {
    return 0;
  }
}