const alphabetESP = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I",
  "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q",
  "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


class Cifrado {
  private key: string = "";
  private alphabet: string[] = [];

  constructor(key = "", alphabet: string = "") {
    this.key = key;
    if (alphabet !== "") {
      alphabet = alphabet.replace(/ /g, '');
      this.alphabet = alphabet.split(',');
    }
  }

  public getKey(): string {
    return this.key;
  }

  public setKey(key: string): void {
    this.key = key;
  }

  public getAlphabet(): string[] {
    return this.alphabet;
  }

  public setAlphabet(alphabet: string): void {
    if (alphabet !== "") {
      alphabet = alphabet.replace(/ /g, '');
      this.alphabet = alphabet.split(',');
    }
  }

  public startCypher(plainMessage: string): string {
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

  public startDecypher(encodedMessage: string): string {
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

let cypher = new Cifrado();
cypher.setKey("CLAVE");
cypher.setAlphabet("A,B,C,D,E,F,G,H,I,J,K,L,M,N,Ñ,O,P,Q,R,S,T,U,V,W,X,Y,Z");
console.log(cypher.startCypher("HOLAESTOESUNAPRUEBA"));
console.log(cypher.startDecypher("KAMWJVFPAXXYBMWXPCW"));