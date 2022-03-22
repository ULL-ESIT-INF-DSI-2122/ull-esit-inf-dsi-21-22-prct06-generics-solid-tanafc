import {FightingRole, Fighter} from './fighter';

/**
 * Stores an entry with the information related to a Fighter
 */
type entryFighter = [name: string, attack: number, defense: number,
    speed: number, hitPoints: number, weight: number, height: number,
    role: FightingRole, universe: string];

/**
 * Class Pokedex that stores the entries with information about Pokemons
 */
export class Pokedex {
  public entries: entryFighter[] = [];

  constructor(...entries: entryFighter[]) {
    entries.forEach((entry) => {
      this.entries.push(entry);
    });
  }

  /**
   * Given certain Fighters, stores the information related to them as an entry
   * @param fighter Fighters whose entries want to be added
   */
  public storeFighters(...fighters: Fighter[]): void {
    fighters.forEach((fighter) => {
      this.entries.push([fighter.getName(), fighter.getAttack(), fighter.getDefense(),
        fighter.getSpeed(), fighter.getHitPoints(), fighter.getWeight(), fighter.getHeight(),
        fighter.getFightingRole(), fighter.getUniverse()]);
    });
  }

  /**
   * Given certain names of Figthers, if the Fighter has an entry,
   * said entry is deleted from the Pokedex
   * @param fighters Names of the Fighters whose entries want to be deleted
   */
  public deleteFighters(...fighters: string[]): void {
    fighters.forEach((fighter) => {
      this.entries.forEach((entry, index) => {
        if (entry[0] == fighter) {
          this.entries.splice(index, 1);
        }
      });
    });
  }
}