import 'mocha';
import {expect} from 'chai';
import {Pokedex} from '../src/ejercicio-1/pokedex';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {FireEmblem} from '../src/ejercicio-1/fire_emblem';
import {Tekken} from '../src/ejercicio-1/tekken';
import {LeagueOfLegends} from '../src/ejercicio-1/league';


describe('Pokedex class function tests', () => {
  let pokedex = new Pokedex(["Pikachu", 20, 5, 55, 50, 55, 55, "Beast", "Pokemon"]);

  it('It creates a new instance of an object with class Pokedex', () => {
    expect(pokedex).to.be.instanceOf(Pokedex);
  });

  it('There is an array of entries for the information of Fighters', () => {
    expect("entries" in pokedex).to.be.true;
    expect(pokedex.entries).to.be.eql([["Pikachu", 20, 5, 55, 50, 55, 55, "Beast", "Pokemon"]]);
  });

  it('Stores the data of the given Fighters', () => {
    let charmander = new Pokemon("Charmander", "Fire", 20, 5, 55, 40, 10, 20);
    let king = new Tekken("King", "American", "Wrestling", 20, 5, 55, 40);
    let chrom = new FireEmblem("Chrom", "Sword", 20, 5, 55, 50, 55, 55, false);
    let veigar = new LeagueOfLegends("Veigar", 0, 50, 10, 30, 40, 55, 10, 10);
    pokedex.storeFighters(charmander, king, chrom, veigar);

    expect(pokedex.entries).to.be.eql([
      ["Pikachu", 20, 5, 55, 50, 55, 55, "Beast", "Pokemon"],
      ["Charmander", 20, 5, 55, 40, 10, 20, "Beast", "Pokemon"],
      ["King", 70, 50, 10, 110, 55, 40, "Warrior", "Tekken"],
      ["Chrom", 20, 5, 55, 50, 55, 55, "Warrior", "FireEmblem"],
      ["Veigar", 50, 40, 40, 55, 10, 10, "Mage", "Runaterra"]]);
  });

  it('Deletes the entries of the Pokemon given its names', () => {
    pokedex.deleteFighters("Pikachu", "Veigar");
    expect(pokedex.entries).to.be.eql([
      ["Charmander", 20, 5, 55, 40, 10, 20, "Beast", "Pokemon"],
      ["King", 70, 50, 10, 110, 55, 40, "Warrior", "Tekken"],
      ["Chrom", 20, 5, 55, 50, 55, 55, "Warrior", "FireEmblem"]]);
  });
});