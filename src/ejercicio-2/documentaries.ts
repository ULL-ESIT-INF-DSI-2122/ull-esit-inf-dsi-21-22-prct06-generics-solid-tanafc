import {BasicStreamableCollection} from "./basic_streamable";

type TypeDocumental = "Historic" | "Science" | "Nature" ;

export class Documental {
  constructor(public name: string, public year: number,
      public director: string, public type: TypeDocumental, public duration: number) {
  }
}

export class DocumentalStreamable extends BasicStreamableCollection<Documental> {
  constructor(collection: Documental[]) {
    super(collection);
  }

  public print() {
    this.collection.forEach((documental) => {
      process.stdout.write(`Documental: ${documental.name}, Year: ${documental.year}, Duration: ${documental.duration}, `);
      process.stdout.write(`Director: ${documental.director}, Type: ${documental.type}\n`);
    });
  }
}