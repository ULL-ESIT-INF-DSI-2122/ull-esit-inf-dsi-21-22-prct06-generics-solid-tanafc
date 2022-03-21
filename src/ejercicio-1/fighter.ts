export abstract class Fighter {
  constructor(protected name: string,
    protected attack: number, protected defense: number,
    protected speed: number, protected hitPoints: number,
    protected weight: number, protected height: number,
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

  public getCatchingPhrase(): string {
    if (this.catchingPhrase) {
      return this.catchingPhrase;
    } else {
      return "";
    }
  }

  abstract getEffectivity(): number;
}