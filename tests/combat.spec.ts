import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {FireEmblem} from '../src/ejercicio-1/fire_emblem';
import {Combat} from '../src/ejercicio-1/combat';
import {Tekken} from '../src/ejercicio-1/tekken';
import {LeagueOfLegends} from '../src/ejercicio-1/league';


describe('Combat class function tests', () => {
  let chikorita = new Pokemon("Chikorita", "Plant", 20, 5, 40, 400, 90, 220, 'Chi', 'Chikorita!');
  let chrom = new FireEmblem("Chrom", "Sword", 20, 5, 55, 500, 90, 300, false, 'You are going down!');
  let combat1 = new Combat(chrom, chikorita);

  let hwoarang = new Tekken("Hwoarang", "South Korea", "Taekwondo", 0, 20, 90, 175, "¿Eso es todo?");
  let darius = new LeagueOfLegends("Darius", 100, 0, 50, 25, 320, 2050, 80, 190, "Noxus!");
  let combat2 = new Combat(darius, hwoarang);

  let eddy = new Tekken("Eddy", "Brazil", "Capoeira", 0, 20, 90, 175, "Vamos a acabar con esto");
  let king = new Tekken("King", "Mexico", "Wrestling", 0, 20, 100, 180);
  let combat3 = new Combat(king, eddy);

  let charizard = new Pokemon("Charizard", "Fire", 100, 50, 40, 200, 90, 220, 'Char', 'Charizard!');
  let rakan = new LeagueOfLegends("Rakan", 10, 20, 50, 50, 400, 200, 70, 180, "Looking good!");
  let combat4 = new Combat(charizard, rakan);

  let marth = new FireEmblem("Marth", "Sword", 20, 5, 55, 1000, 90, 35, false, "For the Kingdom!");
  let ike = new FireEmblem("Ike", "Axe", 20, 5, 55, 1000, 90, 35, false, "For my father!");
  let combat5 = new Combat(marth, ike);

  let xayah = new LeagueOfLegends("Xayah", 70, 20, 20, 120, 400, 500, 70, 180, "What a joke...");
  let veigar = new LeagueOfLegends("Veigar", 10, 110, 50, 40, 400, 500, 70, 180, "Evil!");
  let combat6 = new Combat(xayah, veigar);

  it('It creates a new instance of an object with class Combat', () => {
    expect(combat1).to.be.instanceOf(Combat);
  });

  it('It has two attributes for its combatants', () => {
    expect([combat1.getFirstOpponent(), combat1.getSecOpponent()]).to.be.eql([chrom, chikorita]);
  });

  it('There is a method for calculating the damage dealt', () => {
    expect("dmgResult" in combat1).to.be.true;
  });

  it('There is a method to start the combat', () => {
    expect("start" in combat1).to.be.true;
  });

  it('The combat begins correctly and calculates the correct effectiveness, returning the winner', () => {
    expect(combat1.start()).to.be.equal("Chikorita");
    expect(combat2.start()).to.be.equal("Darius");
    expect(combat3.start()).to.be.equal("King");
    expect(combat4.start()).to.be.equal("Rakan");
    expect(combat5.start()).to.be.equal("Marth");
    expect(combat6.start()).to.be.equal("Xayah");
  });
});