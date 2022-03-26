import {Effectivity, Fighter} from './fighter';

/**
 * Class that defines champions of the League of Legends universe.
 * It has a set of attributes significant to the world of Runeterra.
 */
export class LeagueOfLegends extends Fighter {
  constructor(champion: string, private damageAD: number, private damageAP: number,
      private armor: number, private magicResist: number, speed: number, hitPoints: number,
      weight: number, height: number, catchingPhrase?: string) {
    super(champion, damageAD + damageAP, armor + magicResist, speed,
        hitPoints, weight, height, "Mage", "Runaterra", catchingPhrase);
  }

  /**
   * Returns the physical damage the champion deals.
   * @returns the AD damage.
   */
  public getDamageAD(): number {
    return this.damageAD;
  }

  /**
   * Returns the magical damage the champion deals.
   * @returns the AP damage.
   */
  public getDamageAP(): number {
    return this.damageAP;
  }

  /**
   * Returns the physical armor the champion has.
   * @returns the armor stat value.
   */
  public getArmor(): number {
    return this.armor;
  }

  /**
   * Returns the magic resistance the champion has.
   * @returns the magic resist stat value.
   */
  public getMagicResist(): number {
    return this.magicResist;
  }

  /**
   * Method that returns the effectivity of an attack dealt by
   * an opponent depending on the AD, AP, armor and magic resistance
   * stats.
   * @param opponent opponent to check the effectiveness of an attack.
   * @returns the effectivity value of the attack.
   */
  public getEffectivity(opponent: LeagueOfLegends): Effectivity {
    if (this.getDamageAP() > this.getDamageAD()) {
      if (this.getDamageAP() > opponent.getMagicResist()) {
        return "Effective";
      } else {
        return "NotEffective";
      }
    } else if (this.getDamageAP() < this.getDamageAD()) {
      if (this.getDamageAD() > opponent.getArmor()) {
        return "Effective";
      } else {
        return "NotEffective";
      }
    } else {
      return "Neutral";
    }
  }
}