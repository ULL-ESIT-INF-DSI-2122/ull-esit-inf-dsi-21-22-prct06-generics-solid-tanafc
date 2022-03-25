import {BasicStreamableCollection} from "./basic_streamable";

/**
 * Type to describe a set of genres for the series
 */
type Genre = "Drama" | "Comedy" | "Horror" | "Action";

/**
 * Class Serie that implements a set of attributes for a serie
 */
export class Serie {
  constructor(public name: string, public year: number,
      public director: string, public genre: Genre, public seasons: number) {
  }
}

/**
 * Class that describes a collection of series
 */
export class SeriesStreamable extends BasicStreamableCollection<Serie> {
  constructor(collection: Serie[]) {
    super(collection);
  }

  /**
   * Prints the collection of series with each attribute
   */
  public print() {
    this.collection.forEach((serie) => {
      process.stdout.write(`Serie: ${serie.name}, Year: ${serie.year}, Seasons: ${serie.seasons}, `);
      process.stdout.write(`Director: ${serie.director}, Genre: ${serie.genre}\n`);
    });
  }
}