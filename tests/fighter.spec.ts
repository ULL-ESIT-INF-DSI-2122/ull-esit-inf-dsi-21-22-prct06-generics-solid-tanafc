import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {FireEmblem} from '../src/ejercicio-1/fire_emblem';
import {LeagueOfLegends} from '../src/ejercicio-1/league';
import {Tekken} from '../src/ejercicio-1/tekken';
import {Fighter} from '../src/ejercicio-1/fighter';


describe('Pokemon function tests', () => {
  let pikachu = new Pokemon("Pikachu", "Electric", 20, 5, 55, 40, 90, 35, 'Ash');
  let squirtle = new Pokemon("Squirtle", "Water", 20, 5, 55, 40, 90, 35, 'Ash');
  let flareon = new Pokemon("Flareon", "Fire", 20, 5, 55, 40, 90, 35);
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

  it('There is a method that calculates the effectiveness of attacks between pokemons', () => {
    expect(pikachu.getEffectivity(squirtle)).to.be.equal("Effective");
    expect(squirtle.getEffectivity(pikachu)).to.be.equal("NotEffective");
    expect(pikachu.getEffectivity(flareon)).to.be.equal("Neutral");
  });
});


describe('Fire Emblem function tests', () => {
  let chrom = new FireEmblem("Chrom", "Sword", 20, 5, 55, 40, 90, 35, false);
  let byleth = new FireEmblem("Byleth", "Spear", 20, 5, 55, 40, 90, 35, false);
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

  it('There is a method that calculates the effectiveness of attacks between heroes', () => {
    expect(chrom.getEffectivity(ike)).to.be.equal("Effective");
    expect(ike.getEffectivity(chrom)).to.be.equal("NotEffective");
    expect(byleth.getEffectivity(byleth)).to.be.equal("Neutral");
  });
});


describe('Tekken function tests', () => {
  let kazuya = new Tekken("Kazuya Mishima", "Japanese", "Karate", 10, 5, 90, 170, "Worthless");
  let lee = new Tekken("Lee Chaolan", "Japanese", "Mixed", 0, 5, 90, 160, "Excellent!");
  let eddy = new Tekken("Eddy Gordo", "Brazil", "Capoeira", 0, 15, 90, 180, "Vamos allá!");
  let king = new Tekken("King", "Mexico", "Wrestling", 0, 20, 100, 180);
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

  it('There is a method that calculates the effectiveness of attacks between fighters', () => {
    expect(eddy.getEffectivity(steve)).to.be.equal("Effective");
    expect(eddy.getEffectivity(king)).to.be.equal("NotEffective");
    expect(kazuya.getEffectivity(lee)).to.be.equal("Neutral");
  });
});


describe('LeagueOfLegends function tests', () => {
  let rakan = new LeagueOfLegends("Rakan", 10, 20, 40, 50, 400, 2050, 70, 180, "Looking good!");
  let garen = new LeagueOfLegends("Garen", 100, 0, 50, 40, 400, 3050, 70, 180, "Demaciaaa!");
  let darius = new LeagueOfLegends("Darius", 100, 0, 100, 40, 400, 3050, 70, 180, "Demaciaaa!");
  let corki = new LeagueOfLegends("Corki", 20, 20, 100, 40, 400, 1000, 70, 180);

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

  it('There is a method that calculates the effectiveness of attacks between champions', () => {
    expect(rakan.getEffectivity(garen)).to.be.equal("NotEffective");
    expect(garen.getEffectivity(rakan)).to.be.equal("Effective");
    expect(corki.getEffectivity(darius)).to.be.equal("Neutral");
  });
});