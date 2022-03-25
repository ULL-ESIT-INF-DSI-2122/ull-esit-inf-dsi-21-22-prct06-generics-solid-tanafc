import {BasicStreamableCollection} from "./basic_streamable";

type Genre = "Drama" | "Comedy" | "Horror" | "Action";

export class Movie {
  constructor(public name: string, public year: number,
      public director: string, public genre: Genre, public duration: number) {
  }
}

export class MovieStreamable extends BasicStreamableCollection<Movie> {
  constructor(collection: Movie[]) {
    super(collection);
  }

  public print() {
    this.collection.forEach((movie) => {
      process.stdout.write(`Movie: ${movie.name}, Year: ${movie.year}, Duration: ${movie.duration}, `);
      process.stdout.write(`Director: ${movie.director}, Genre: ${movie.genre}\n`);
    });
  }
}