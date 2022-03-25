import {Streamable, SearchableStreamCollection, PrintableStreamCollection} from "./streamable";

export abstract class BasicStreamableCollection<T extends {name: string, year: number}> implements
    Streamable<T>, SearchableStreamCollection<T>, PrintableStreamCollection<T> {
  constructor(protected collection: T[]) {
  }

  public getCollection(): T[] {
    return this.collection;
  }

  public getMediaAt(index: number): T {
    return this.collection[index];
  }

  public getNumberStreams(): number {
    return this.collection.length;
  }

  public addMedia(media: T): void {
    this.collection.push(media);
  }

  public deleteMedia(name: string): void {
    this.collection.forEach((media, index) => {
      if (media.name == name) {
        this.collection.splice(index, 1);
      }
    });
  }

  public searchNameMedia(name: string): T[] {
    return this.collection.filter((media) => media.name.includes(name));
  }

  public searchYearMedia(year: number): T[] {
    return this.collection.filter((media) => media.year === year);
  }

  abstract print(): void;
}