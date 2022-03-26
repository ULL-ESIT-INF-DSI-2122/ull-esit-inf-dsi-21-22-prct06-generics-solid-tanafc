/**
 * Abstract class that defines a set of attributes and methods
 * to implement in a cipher of any type
 */
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

  /**
   * Returns the defined key of the cipher
   * @returns as a string
   */
  public getKey(): string {
    return this.key;
  }

  /**
   * Given a certain key, sets the key of the cipher
   * @param key string to set as key
   */
  public setKey(key: string): void {
    this.key = key;
  }

  /**
   * Returns the alphabet of the cipher as an array of strings
   * @returns the alphabet of the cipher
   */
  public getAlphabet(): string[] {
    return this.alphabet;
  }

  /**
   * Given a string of characters separated by ',',
   * sets the alphabet of the cipher
   * @param alphabet given as a string of characters separated by ','
   */
  public setAlphabet(alphabet: string): void {
    if (alphabet !== "") {
      alphabet = alphabet.replace(/ /g, '');
      this.alphabet = alphabet.split(',');
    }
  }

  /**
   * Starts the cipher of the given message.
   * Method to be implemented by child classes
   * @param plainMessage message to be encoded
   */
  abstract startCipher(plainMessage: string): string;

  /**
   * Starts the decipher of the given message.
   * Method to be implemented by child classes
   * @param encodedMessage message to be decoded
   */
  abstract startDecipher(encodedMessage: string): string;
}