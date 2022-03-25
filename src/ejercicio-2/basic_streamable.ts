import {Streamable, SearchableStreamCollection, PrintableStreamCollection} from "./streamable";

/**
 * Abstract class that implements methods for a collection of media,
 * it implements the interfaces Searchable and Printable for the collection.
 */
export abstract class BasicStreamableCollection<T extends {name: string, year: number}> implements
    Streamable<T>, SearchableStreamCollection<T>, PrintableStreamCollection<T> {
  constructor(protected collection: T[]) {
  }

  /**
   * Getter for the collection
   * @returns the collection
   */
  public getCollection(): T[] {
    return this.collection;
  }

  /**
   * Returns the media in the given index of the collection
   * @param index index in the collection
   * @returns the specified media
   */
  public getMediaAt(index: number): T {
    return this.collection[index];
  }

  /**
   * Returns the number of elements in the collection
   * @returns number
   */
  public getNumberStreams(): number {
    return this.collection.length;
  }

  /**
   * Adds the given media to the collection
   * @param media to be inserted in the collection
   */
  public addMedia(media: T): void {
    this.collection.push(media);
  }

  /**
   * Deletes the element in the collection given the name of a media
   * @param name string containing the name of the media to be deleted
   */
  public deleteMedia(name: string): void {
    this.collection.forEach((media, index) => {
      if (media.name == name) {
        this.collection.splice(index, 1);
      }
    });
  }

  /**
   * Returns an array of elements whose names includes the string given
   * @param name name of the media to search
   * @returns an array containing the matches of the search
   */
  public searchNameMedia(name: string): T[] {
    return this.collection.filter((media) => media.name.includes(name));
  }

  /**
   * Returns an array containing media whose year match the one given
   * @param year number to compare the year of the media
   * @returns an array containing the matches of the search
   */
  public searchYearMedia(year: number): T[] {
    return this.collection.filter((media) => media.year === year);
  }

  /**
   * Method to be implemented by child classes
   */
  abstract print(): void;
}