import {BasicStreamableCollection} from "./basic_streamable";

/**
 * Type to describe the genres of movies
 */
type Genre = "Drama" | "Comedy" | "Horror" | "Action";

/**
 * Class that implements the attributes to represent a movie
 */
export class Movie {
  constructor(public name: string, public year: number,
      public director: string, public genre: Genre, public duration: number) {
  }
}

/**
 * Class that describes a collection of movies
 */
export class MovieStreamable extends BasicStreamableCollection<Movie> {
  constructor(collection: Movie[]) {
    super(collection);
  }

  /**
   * Prints the collection of movies with each attribute
   */
  public print() {
    this.collection.forEach((movie) => {
      process.stdout.write(`Movie: ${movie.name}, Year: ${movie.year}, Duration: ${movie.duration}, `);
      process.stdout.write(`Director: ${movie.director}, Genre: ${movie.genre}\n`);
    });
  }
}