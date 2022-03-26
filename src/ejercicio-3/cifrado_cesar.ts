import {Cifrado} from './cifrado';

export class CifradoCesar extends Cifrado {
  constructor(key: string = "", alphabet: string = "") {
    super(key, alphabet);
  }

  public startCipher(plainMessage: string): string {
    if (this.key === "" || this.alphabet.length === 0 || plainMessage === "") {
      return "Cypher cannot start unless given a key, alphabet and message";
    }

    let seed = this.key;
    while (seed.length < plainMessage.length) {
      seed += seed;
    }

    let cypherMessage = "";
    for (let i = 0; i < plainMessage.length; i++) {
      let textChar = plainMessage.charAt(i);
      let d = 0;
      for (let j = 0; j < this.alphabet.length; j++) {
        if (seed.charAt(i) === this.alphabet[j]) {
          d = j + 1;
          break;
        }
      }
      let cyphered = false;
      for (let j = 0; j < this.alphabet.length; j++) {
        if (textChar === this.alphabet[j]) {
          cypherMessage += this.alphabet[(j + d) % this.alphabet.length];
          cyphered = true;
          break;
        }
      }
      if (!cyphered) {
        cypherMessage += textChar;
      }
    }
    return cypherMessage;
  }

  public startDecipher(encodedMessage: string): string {
    if (this.key === "" || this.alphabet.length === 0 || encodedMessage === "") {
      return "Decypher cannot start unless given a key, alphabet and message";
    }

    let seed = this.key;
    while (seed.length < encodedMessage.length) {
      seed += seed;
    }

    let plainMessage = "";
    for (let i = 0; i < encodedMessage.length; i++) {
      let textChar = encodedMessage.charAt(i);
      let d = 0;
      for (let j = 0; j < this.alphabet.length; j++) {
        if (seed.charAt(i) === this.alphabet[j]) {
          d = j + 1;
          break;
        }
      }
      let decoded = false;
      for (let j = 0; j < this.alphabet.length; j++) {
        if (textChar === this.alphabet[j]) {
          let diff = j - d;
          if (diff >= 0) {
            plainMessage += this.alphabet[diff];
          } else {
            plainMessage += this.alphabet[this.alphabet.length + diff];
          }
          decoded = true;
          break;
        }
      }
      if (!decoded) {
        plainMessage += textChar;
      }
    }
    return plainMessage;
  }
}