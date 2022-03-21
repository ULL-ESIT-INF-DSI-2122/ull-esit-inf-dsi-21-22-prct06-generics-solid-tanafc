import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {FireEmblem} from '../src/ejercicio-1/fire_emblem';
import {LeagueOfLegends} from '../src/ejercicio-1/league';
import {Tekken} from '../src/ejercicio-1/tekken';
import {Fighter} from '../src/ejercicio-1/fighter';

describe('Pokemon function tests', () => {
  let pikachu = new Pokemon("Pikachu", "Electric", 20, 5, 55, 40, 90, 35, 'Ash');
  let eevee = new Pokemon("Eevee", "Electric", 20, 5, 55, 40, 90, 35);

  it('It creates a new instance of an object with class Pokemon', () => {
    expect(pikachu).to.be.instanceOf(Pokemon);
  });

  it('It extends the abstract class Fighter', () => {
    expect(Pokemon.prototype).to.be.instanceOf(Fighter);
  });

  it('There is an attribute for its name and alias', () => {
    expect([pikachu.getName(), pikachu.getAlias()]).to.be.eql(['Pikachu', 'Ash']);
    expect([eevee.getName(), eevee.getAlias()]).to.be.eql(['Eevee', 'Este pokemon no tiene un mote']);
  });

  it('There is an attribute for its weight and height', () => {
    expect([pikachu.getWeight(), pikachu.getHeight()]).to.be.eql([90, 35]);
  });

  it('There is an attribute for its type', () => {
    expect(pikachu.getType()).to.be.equal('Electric');
  });

  it('There is an attribute for each of its base stats', () => {
    expect([pikachu.getAttack(), pikachu.getDefense(), pikachu.getSpeed(),
      pikachu.getHitPoints()]).to.be.eql([20, 5, 55, 40]);
  });
});


describe('Fire Emblem function tests', () => {
  let chrom = new FireEmblem("Chrom", "Sword", 20, 5, 55, 40, 90, 35, false);
  let ike = new FireEmblem("Ike", "Axe", 20, 5, 55, 40, 90, 35, false);

  it('It creates a new instance of an object with class FireEmblem', () => {
    expect(ike).to.be.instanceOf(FireEmblem);
  });

  it('It extends the abstract class Fighter', () => {
    expect(FireEmblem.prototype).to.be.instanceOf(Fighter);
  });

  it('There is an attribute for its name', () => {
    expect(ike.getName()).to.be.eql("Ike");
    expect(chrom.getName()).to.be.eql("Chrom");
  });

  it('There is an attribute for its weight and height', () => {
    expect([chrom.getWeight(), chrom.getHeight()]).to.be.eql([90, 35]);
  });

  it('There is an attribute for each of its base stats', () => {
    expect([chrom.getAttack(), chrom.getDefense(), chrom.getSpeed(),
      chrom.getHitPoints()]).to.be.eql([20, 5, 55, 40]);
  });
});