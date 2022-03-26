/**
 * Type that defines the roles of different fighters
 * in different universes.
 */
export type FightingRole = "Beast" | "Mage" | "Warrior"

/**
 * Type that defines the effectiveness of the attacks.
 */
export type Effectivity = "Effective" | "NotEffective" | "Neutral"

/**
 * Abstract class Fighter that defines a set of attributes and methods
 * in common for fighters of different universes.
 */
export abstract class Fighter {
  constructor(protected name: string,
    protected attack: number, protected defense: number,
    protected speed: number, protected hitPoints: number,
    protected weight: number, protected height: number,
    protected role: FightingRole, protected universe: string,
    protected catchingPhrase?: string) {
  }

  public getName(): string {
    return this.name;
  }

  public getAttack(): number {
    return this.attack;
  }

  public getDefense(): number {
    return this.defense;
  }

  public getSpeed(): number {
    return this.speed;
  }

  public getHitPoints(): number {
    return this.hitPoints;
  }

  public setHitPoints(value: number): void {
    this.hitPoints = value;
  }

  public getWeight(): number {
    return this.weight;
  }

  public getHeight(): number {
    return this.height;
  }

  public getUniverse(): string {
    return this.universe;
  }

  public getFightingRole(): FightingRole {
    return this.role;
  }

  /**
   * If defined, returns the catching phrase of the fighter,
   * otherwhise it returns an empty string.
   * @returns the catching phrase of the fighter.
   */
  public getCatchingPhrase(): string {
    if (this.catchingPhrase) {
      return this.catchingPhrase;
    } else {
      return "";
    }
  }

  /**
   * Method to be implemented by child classes that establishes
   * the rules of effectivity in the attacks of the fighters in
   * the same universe.
   * @param opponent opponent to check the effectivity of the attack.
   */
  abstract getEffectivity(opponent: Fighter): Effectivity;
}