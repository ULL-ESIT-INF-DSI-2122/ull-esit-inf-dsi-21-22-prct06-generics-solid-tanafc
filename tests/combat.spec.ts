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
  let hwoarang = new Tekken("Hwoarang", "South Korea", "Taekwondo", 0, 20, 90, 175, "¿Eso es todo?");
  let darius = new LeagueOfLegends("Darius", 100, 0, 50, 25, 320, 2050, 80, 190, "Noxus!");
  let combat1 = new Combat(chrom, chikorita);
  let combat2 = new Combat(darius, hwoarang);

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

  it('The combat begins correctly and returns the winner', () => {
    expect(combat1.start()).to.be.equal("Chikorita");
    expect(combat2.start()).to.be.equal("Darius");
  });
});