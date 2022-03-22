export type FightingRole = "Beast" | "Mage" | "Warrior"
export type Effectivity = "Effective" | "NotEffective" | "Neutral"

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

  public getCatchingPhrase(): string {
    if (this.catchingPhrase) {
      return this.catchingPhrase;
    } else {
      return "";
    }
  }

  abstract getEffectivity(opponent: Fighter): Effectivity;
}