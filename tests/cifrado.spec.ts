import 'mocha';
import {expect} from 'chai';
import {CifradoCesar} from '../src/ejercicio-3/cifrado_cesar';
import {Cifrado} from '../src/ejercicio-3/cifrado';

describe('CifradoCesar class function tests', () => {
  let cipher = new CifradoCesar();

  it('It creates a new instance of an object with class CifradoCesar', () => {
    expect(cipher).to.be.instanceOf(CifradoCesar);
  });

  it('Class CifradoCesar extends class Cifrado', () => {
    expect(cipher).to.be.instanceOf(Cifrado);
  });

  it('It has a method to set the key of the cipher', () => {
    expect(cipher.getKey()).to.be.equal("");
    cipher.setKey("CLAVE");
    expect(cipher.getKey()).to.be.equal("CLAVE");
  });

  it('It has a method to set an alphabet to the cipher', () => {
    expect(cipher.getAlphabet()).to.be.eql([]);
    cipher.setAlphabet("");
    expect(cipher.getAlphabet()).to.be.eql([]);
    cipher.setAlphabet("A, B,C ,D,E,F,G,H,I, J,K,L,M,N,Ñ,O,P,Q,R,S,T,U,V ,W,X,Y,Z, a, b, c");
    expect(cipher.getAlphabet()).to.be.eql([
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
      "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
      "a", "b", "c"]);
    cipher.setAlphabet("A,B,C,D,E,F,G,H,I,J,K,L,M,N,Ñ,O,P,Q,R,S,T,U,V,W,X,Y,Z");
    expect(cipher.getAlphabet()).to.be.eql([
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
      "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
  });

  it('It has a method that starts the cipher and returns the encoded message', () => {
    expect(cipher.startCipher("HOLAESTOESUNAPRUEBA")).to.be.equal("KAMWJVFPAXXYBMWXPCW");
    expect(cipher.startCipher("estonosedefineenelalfabeto")).to.be.equal("estonosedefineenelalfabeto");
  });

  it('It has a method that starts the decipher and returns the decoded message', () => {
    expect(cipher.startDecipher("KAMWJVFPAXXYBMWXPCW")).to.be.equal("HOLAESTOESUNAPRUEBA");
    expect(cipher.startDecipher("estonosedefineenelalfabeto")).to.be.equal("estonosedefineenelalfabeto");
  });
});