import 'mocha';
import {expect} from 'chai';
import {Movie, MovieStreamable} from '../src/ejercicio-2/movies';
import {BasicStreamableCollection} from '../src/ejercicio-2/basic_streamable';


describe('MovieStreamable class function tests', () => {
  let movieCollection = new MovieStreamable([
    new Movie("Titanic", 1997, "James Cameron", "Drama", 140),
    new Movie("Alien", 1979, "Ridley Scott", "Horror", 120)]);

  it('It creates a new instance of an object with class MovieStreamable', () => {
    expect(movieCollection).to.be.instanceOf(MovieStreamable);
  });

  it('Class MovieStreamable extends class BasicStreamableCollection', () => {
    expect(movieCollection).to.be.instanceOf(BasicStreamableCollection);
  });

  it('It has a method to add a Movie to the collection', () => {
    movieCollection.addMedia(new Movie("Joker", 2019, "Todd Phillips", "Drama", 150));
    expect(movieCollection.getMediaAt(2)).to.be.eql(new Movie("Joker", 2019, "Todd Phillips", "Drama", 150));
  });

  it('It has a method to remove a Movie in the collection', () => {
    movieCollection.deleteMedia("Alien");
    expect(movieCollection.getCollection()).to.be.eql([
      new Movie("Titanic", 1997, "James Cameron", "Drama", 140),
      new Movie("Joker", 2019, "Todd Phillips", "Drama", 150)]);
  });

  it('It has a method that returns the number of movies in the collection', () => {
    expect(movieCollection.getNumberStreams()).to.be.equal(2);
  });

  it('It has a method that searchs movies by its name and returns an array with the instances', () => {
    movieCollection.addMedia(new Movie("New Titanic", 2022, "Todd Phillips", "Comedy", 160));
    expect(movieCollection.searchNameMedia("Titanic")).to.be.eql([
      new Movie("Titanic", 1997, "James Cameron", "Drama", 140),
      new Movie("New Titanic", 2022, "Todd Phillips", "Comedy", 160)]);
  });

  it('It has a method that searchs movies by its year and returns an array with the instances', () => {
    expect(movieCollection.searchYearMedia(1979)).to.be.eql([]);
    expect(movieCollection.searchYearMedia(2019)).to.be.eql([new Movie("Joker", 2019, "Todd Phillips", "Drama", 150)]);
  });

  it('It has a method that prints the collection of movies', () => {
    movieCollection.print();
    expect("print" in movieCollection).to.be.true;
  });
});