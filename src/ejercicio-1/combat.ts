import {Fighter} from './fighter';

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
   * Calculates the damage dealt by the attackOpponent to the defendOpponent,
   * based in the attack and defense stats.
   * @param attackOpponent Opponent who is attacking.
   * @param defendOpponent Oponnent who receives the attack.
   * @returns The damage dealt by the attackOpponent.
   */
  private dmgResult(attackOpponent: (T | U), defendOpponent: (T | U)): number {
    let typeAdvantage = 1;
    let dmg = (50 * (attackOpponent.getAttack() / defendOpponent.getDefense()) * typeAdvantage);
    console.log(`${attackOpponent.getName()} deals ${dmg} damage to ${defendOpponent.getName()}!`);
    // if (typeAdvantage == veryEffective) {
    //   console.log(`It's super effective!: ${dmg} damage`);
    // } else if (typeAdvantage == notVeryEffective) {
    //   console.log(`It wasn't very effective...: ${dmg} damage`);
    // } else {
    //   console.log(`${dmg} damage`);
    // }
    return dmg;
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