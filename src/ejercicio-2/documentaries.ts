import {BasicStreamableCollection} from "./basic_streamable";

/**
 * Type that describes types of documentaries
 */
type TypeDocumental = "Historic" | "Science" | "Nature" ;

/**
 * Class that implements attributes for a Documental
 */
export class Documental {
  constructor(public name: string, public year: number,
      public director: string, public type: TypeDocumental, public duration: number) {
  }
}

/**
 * Class that describes a collection of documentaries
 */
export class DocumentalStreamable extends BasicStreamableCollection<Documental> {
  constructor(collection: Documental[]) {
    super(collection);
  }

  /**
   * Prints the collection of documentaries with each attribute
   */
  public print() {
    this.collection.forEach((documental) => {
      process.stdout.write(`Documental: ${documental.name}, Year: ${documental.year}, Duration: ${documental.duration}, `);
      process.stdout.write(`Director: ${documental.director}, Type: ${documental.type}\n`);
    });
  }
}