export interface Streamable<T>{
  addMedia(media: T): void;
  deleteMedia(name: string): void;
  getMediaAt(index: number): T;
  getNumberStreams(): number;
}

export interface SearchableStreamCollection<T> {
  searchNameMedia(name: string): T[];
  searchYearMedia(year: number): T[];
}

export interface PrintableStreamCollection<T> {
  print(): void;
}