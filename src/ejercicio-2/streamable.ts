/**
 * Interface that describes a set of methods
 * for a collection of media
 */
export interface Streamable<T>{
  addMedia(media: T): void;
  deleteMedia(name: string): void;
  getMediaAt(index: number): T;
  getNumberStreams(): number;
}

/**
 * Interface that describes a set of methods for
 * searching in a collection of media
 */
export interface SearchableStreamCollection<T> {
  searchNameMedia(name: string): T[];
  searchYearMedia(year: number): T[];
}

/**
 * Interface that defines a method for
 * printing a collection of media
 */
export interface PrintableStreamCollection<T> {
  print(): void;
}