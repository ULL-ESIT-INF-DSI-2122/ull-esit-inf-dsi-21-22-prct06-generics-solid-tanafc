import {Cifrado} from './cifrado';

/**
 * Class that implements a set of methods for the cipher and
 * decipher of the Cesar encode. It extends the abstract class Cifrado
 */
export class CifradoCesar extends Cifrado {
  constructor(key: string = "", alphabet: string = "") {
    super(key, alphabet);
  }

  /**
   * Starts the encode of the given message, returning the cipher
   * @param plainMessage message to be encoded
   * @returns the encoded message
   */
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

  /**
   * Starts the decode of the given encoded message, returning said message
   * @param encodedMessage encoded message to decode
   * @returns the decoded message
   */
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