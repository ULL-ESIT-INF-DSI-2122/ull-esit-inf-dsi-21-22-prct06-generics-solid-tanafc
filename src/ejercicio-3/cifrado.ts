export abstract class Cifrado {
  protected key: string = "";
  protected alphabet: string[] = [];

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

  abstract startCipher(plainMessage: string): string;
  abstract startDecipher(encodedMessage: string): string;
}