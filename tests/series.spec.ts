import 'mocha';
import {expect} from 'chai';
import {Serie, SeriesStreamable} from '../src/ejercicio-2/series';
import {BasicStreamableCollection} from '../src/ejercicio-2/basic_streamable';


describe('SeriesStreamable class function tests', () => {
  let seriesCollection = new SeriesStreamable([
    new Serie("Squid Games", 2021, "Hwang Dong-hyuk", "Action", 1),
    new Serie("Breaking Bad", 2008, "Walter White", "Drama", 4)]);

  it('It creates a new instance of an object with class SeriesStreamable', () => {
    expect(seriesCollection).to.be.instanceOf(SeriesStreamable);
  });

  it('Class SeriesStreamable extends class BasicStreamableCollection', () => {
    expect(seriesCollection).to.be.instanceOf(BasicStreamableCollection);
  });

  it('It has a method to add a Series to the collection', () => {
    seriesCollection.addMedia(new Serie("Better Call Saul", 2010, "Walter White", "Drama", 4));
    expect(seriesCollection.getMediaAt(2)).to.be.eql(new Serie("Better Call Saul", 2010, "Walter White", "Drama", 4));
  });

  it('It has a method to remove a Serie in the collection', () => {
    seriesCollection.deleteMedia("Squid Games");
    expect(seriesCollection.getCollection()).to.be.eql([
      new Serie("Breaking Bad", 2008, "Walter White", "Drama", 4),
      new Serie("Better Call Saul", 2010, "Walter White", "Drama", 4)]);
  });

  it('It has a method that returns the number of series in the collection', () => {
    expect(seriesCollection.getNumberStreams()).to.be.equal(2);
  });

  it('It has a method that searchs series by its name and returns an array with the instances', () => {
    seriesCollection.addMedia(new Serie("Better Call Paul", 2000, "Phillips", "Action", 140));
    expect(seriesCollection.searchNameMedia("Call")).to.be.eql([
      new Serie("Better Call Saul", 2010, "Walter White", "Drama", 4),
      new Serie("Better Call Paul", 2000, "Phillips", "Action", 140)]);
  });

  it('It has a method that searchs series by its year and returns an array with the instances', () => {
    expect(seriesCollection.searchYearMedia(1979)).to.be.eql([]);
    expect(seriesCollection.searchYearMedia(2010)).to.be.eql([new Serie("Better Call Saul", 2010, "Walter White", "Drama", 4)]);
  });

  it('It has a method that prints the collection of series', () => {
    seriesCollection.print();
    expect("print" in seriesCollection).to.be.true;
  });
});