import {BasicStreamableCollection} from "./basic_streamable";

type Genre = "Drama" | "Comedy" | "Horror" | "Action";

export class Serie {
  constructor(public name: string, public year: number,
      public director: string, public genre: Genre, public seasons: number) {
  }
}

export class SeriesStreamable extends BasicStreamableCollection<Serie> {
  constructor(collection: Serie[]) {
    super(collection);
  }

  public print() {
    this.collection.forEach((serie) => {
      process.stdout.write(`Serie: ${serie.name}, Year: ${serie.year}, Seasons: ${serie.seasons}, `);
      process.stdout.write(`Director: ${serie.director}, Genre: ${serie.genre}\n`);
    });
  }
}