import {Effectivity, FightingRole, Fighter} from './fighter';

/**
 * Class Combat that defines a combat between two oponents.
 * It implements the methods to start the combat and calculate
 * the results.
 */
export class Combat<T extends Fighter, U extends Fighter> {
  constructor(private firstOpponent: T, private secondOpponent: U) {
  }

  public getFirstOpponent(): T {
    return this.firstOpponent;
  }

  public getSecOpponent(): U {
    return this.secondOpponent;
  }

  /**
   * Determinates the effectivity of an attack depending on the
   * advantage that the opponents have in their own universe, or
   * the role that is established in different universes.
   * @param attackOpponent Opponents who attacks.
   * @param defendOpponent Opponent who receives the attack.
   * @returns The effectivity of the attack given as a type Effectivity.
   */
  private effectivityStat(attackOpponent: (T | U), defendOpponent: (T | U)): Effectivity {
    let typeAdvantage: Effectivity = "Neutral";

    if (attackOpponent.getUniverse() == defendOpponent.getUniverse()) {
      typeAdvantage = attackOpponent.getEffectivity(defendOpponent);
    } else {
      switch (attackOpponent.getFightingRole()) {
        case "Beast":
          if (defendOpponent.getFightingRole() == "Warrior") {
            typeAdvantage = "Effective";
          } else if (defendOpponent.getFightingRole() == "Mage") {
            typeAdvantage = "NotEffective";
          } else {
            typeAdvantage = "Neutral";
          }
          break;

        case "Warrior":
          if (defendOpponent.getFightingRole() == "Mage") {
            typeAdvantage = "Effective";
          } else if (defendOpponent.getFightingRole() == "Beast") {
            typeAdvantage = "NotEffective";
          } else {
            typeAdvantage = "Neutral";
          }
          break;

        case "Mage":
          if (defendOpponent.getFightingRole() == "Beast") {
            typeAdvantage = "Effective";
          } else if (defendOpponent.getFightingRole() == "Warrior") {
            typeAdvantage = "NotEffective";
          } else {
            typeAdvantage = "Neutral";
          }
          break;
      }
    }
    return typeAdvantage;
  }

  /**
   * Calculates the damage dealt by the attackOpponent to the defendOpponent,
   * based in the attack and defense stats.
   * @param attackOpponent Opponent who is attacking.
   * @param defendOpponent Oponnent who receives the attack.
   * @returns The damage dealt by the attackOpponent.
   */
  private dmgResult(attackOpponent: (T | U), defendOpponent: (T | U)): number {
    let baseDamage = (50 * (attackOpponent.getAttack() / defendOpponent.getDefense()));
    let typeAdvantage = this.effectivityStat(attackOpponent, defendOpponent);
    let damageMultiplier = 1;

    switch (typeAdvantage) {
      case "Neutral":
        damageMultiplier = 1;
        break;
      case "Effective":
        console.log('Its super effective!');
        damageMultiplier = 2;
        break;
      case "NotEffective":
        console.log('Its not very effective...');
        damageMultiplier = 0.5;
        break;
    }

    let totalDamage = baseDamage * damageMultiplier;
    console.log(`${attackOpponent.getName()} deals ${totalDamage} damage to ${defendOpponent.getName()}!`);

    return totalDamage;
  }

  /**
   * Method that simulates and initiates the battle between the opponents.
   * @returns The winner of the combat, given as a string.
   */
  public start(): string {
    let attackOpponent: (T | U) = this.firstOpponent;
    let defendOpponent: (T | U) = this.secondOpponent;
    let winner: string;

    // Combat simulation
    console.log(`${defendOpponent.getName()} VS ${attackOpponent.getName()}!`);
    console.log(`${attackOpponent.getName()} has ${attackOpponent.getHitPoints()} HP`);
    console.log(`${defendOpponent.getName()} has ${defendOpponent.getHitPoints()} HP`);

    while (true) {
      console.log(`${attackOpponent.getName()} attacks!`);
      console.log(`${attackOpponent.getCatchingPhrase()}`);
      let dmg = this.dmgResult(attackOpponent, defendOpponent);
      defendOpponent.setHitPoints(defendOpponent.getHitPoints() - dmg);
      console.log(`${defendOpponent.getName()} has ${defendOpponent.getHitPoints()} HP left`);

      if (defendOpponent.getHitPoints() <= 0) {
        console.log(`${defendOpponent.getName()} can't battle anymore, ${attackOpponent.getName()} is the winner!`);
        winner = attackOpponent.getName();
        break;
      } else {
        let aux: (T | U) = defendOpponent;
        defendOpponent = attackOpponent;
        attackOpponent = aux;
      }
    }
    return winner;
  }
}