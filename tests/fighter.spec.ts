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


describe('Tekken function tests', () => {
  let kazuya = new Tekken("Kazuya Mishima", "Japanese", "Karate", 10, 5, 90, 170, "Worthless");
  let lee = new Tekken("Lee Chaolan", "Japanese", "Mixed", 0, 5, 90, 160, "Excellent!");
  let eddy = new Tekken("Eddy Gordo", "Brazil", "Capoeira", 0, 15, 90, 180, "Vamos allá!");
  let steve = new Tekken("Steve", "American", "Boxing", 0, 15, 90, 175, "Wanna try me?");

  it('It creates a new instance of an object with class FireEmblem', () => {
    expect(kazuya).to.be.instanceOf(Tekken);
  });

  it('It extends the abstract class Fighter', () => {
    expect(Tekken.prototype).to.be.instanceOf(Fighter);
  });

  it('There is an attribute for its name', () => {
    expect(lee.getName()).to.be.eql("Lee Chaolan");
    expect(eddy.getName()).to.be.eql("Eddy Gordo");
  });

  it('There is an attribute for its weight and height', () => {
    expect([eddy.getWeight(), eddy.getHeight()]).to.be.eql([90, 180]);
  });

  it('There is an attribute for each of its base stats', () => {
    expect([steve.getAttack(), steve.getDefense(), steve.getSpeed(),
      steve.getHitPoints()]).to.be.eql([40, 50, 10, 110]);
  });
});


describe('LeagueOfLegends function tests', () => {
  let rakan = new LeagueOfLegends("Rakan", 10, 20, 40, 50, 400, 2050, 70, 180, "Looking good!");
  let garen = new LeagueOfLegends("Garen", 100, 0, 50, 40, 400, 3050, 70, 180, "Demaciaaa!");

  it('It creates a new instance of an object with class LeagueOfLegends', () => {
    expect(garen).to.be.instanceOf(LeagueOfLegends);
  });

  it('It extends the abstract class Fighter', () => {
    expect(LeagueOfLegends.prototype).to.be.instanceOf(Fighter);
  });

  it('There is an attribute for its name', () => {
    expect(garen.getName()).to.be.eql("Garen");
    expect(rakan.getName()).to.be.eql("Rakan");
  });

  it('There is an attribute for its weight and height', () => {
    expect([garen.getWeight(), garen.getHeight()]).to.be.eql([70, 180]);
  });

  it('There is an attribute for each of its base stats', () => {
    expect([rakan.getAttack(), rakan.getDefense(), rakan.getSpeed(),
      rakan.getHitPoints()]).to.be.eql([30, 90, 400, 2050]);
  });
});