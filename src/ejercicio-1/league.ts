import {Fighter} from './fighter';

export class LeagueOfLegends extends Fighter {
  constructor(champion: string, private damageAD: number, private damageAP: number,
      private armor: number, private magicResist: number, speed: number, hitPoints: number,
      weight: number, height: number, catchingPhrase?: string) {
    super(champion, damageAD + damageAP, armor + magicResist, speed,
        hitPoints, weight, height, catchingPhrase);
  }

  public getDamageAD(): number {
    return this.damageAD;
  }

  public getDamageAP(): number {
    return this.damageAP;
  }

  public getArmor(): number {
    return this.armor;
  }

  public getMagicResist(): number {
    return this.magicResist;
  }

  public getEffectivity(): number {
    return 0;
  }
}