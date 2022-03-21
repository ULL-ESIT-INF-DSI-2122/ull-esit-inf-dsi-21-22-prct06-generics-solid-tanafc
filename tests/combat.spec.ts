import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {FireEmblem} from '../src/ejercicio-1/fire_emblem';
import {Combat} from '../src/ejercicio-1/combat';


describe('Combat class function tests', () => {
  let chikorita = new Pokemon("Chikorita", "Plant", 20, 5, 40, 400, 90, 220, 'Chi', 'Chikorita!');
  let chrom = new FireEmblem("Chrom", "Sword", 20, 5, 55, 500, 90, 300, false, 'You are going down!');
  let combat = new Combat(chrom, chikorita);

  it('It creates a new instance of an object with class Combat', () => {
    expect(combat).to.be.instanceOf(Combat);
  });

  it('It has two attributes for its combatants', () => {
    expect([combat.getFirstOpponent(), combat.getSecOpponent()]).to.be.eql([chrom, chikorita]);
  });

  it('There is a method for calculating the damage dealt', () => {
    expect("dmgResult" in combat).to.be.true;
  });

  it('There is a method to start the combat', () => {
    expect("start" in combat).to.be.true;
  });

  it('The combat begins correctly and returns the winner', () => {
    expect(combat.start()).to.be.equal("Chrom");
  });
});