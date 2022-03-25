import 'mocha';
import {expect} from 'chai';
import {Documental, DocumentalStreamable} from '../src/ejercicio-2/documentaries';
import {BasicStreamableCollection} from '../src/ejercicio-2/basic_streamable';


describe('DocumentalStreamable class function tests', () => {
  let docCollection = new DocumentalStreamable([
    new Documental("Bears", 2000, "Jimmy", "Nature", 140),
    new Documental("WW2", 1999, "Michael", "Historic", 120)]);

  it('It creates a new instance of an object with class DocumentalStreamable', () => {
    expect(docCollection).to.be.instanceOf(DocumentalStreamable);
  });

  it('Class DocumentalStreamable extends class BasicStreamableCollection', () => {
    expect(docCollection).to.be.instanceOf(BasicStreamableCollection);
  });

  it('It has a method to add a Documental to the collection', () => {
    docCollection.addMedia(new Documental("H2O", 2019, "Todd", "Science", 150));
    expect(docCollection.getMediaAt(2)).to.be.eql(new Documental("H2O", 2019, "Todd", "Science", 150));
  });

  it('It has a method to remove a Documental in the collection', () => {
    docCollection.deleteMedia("H2O");
    expect(docCollection.getCollection()).to.be.eql([
      new Documental("Bears", 2000, "Jimmy", "Nature", 140),
      new Documental("WW2", 1999, "Michael", "Historic", 120)]);
  });

  it('It has a method that returns the number of movies in the collection', () => {
    expect(docCollection.getNumberStreams()).to.be.equal(2);
  });

  it('It has a method that searchs documentaries by its name and returns an array with the instances', () => {
    docCollection.addMedia(new Documental("Artic Bears", 2000, "Phillips", "Nature", 140));
    expect(docCollection.searchNameMedia("Bears")).to.be.eql([
      new Documental("Bears", 2000, "Jimmy", "Nature", 140),
      new Documental("Artic Bears", 2000, "Phillips", "Nature", 140)]);
  });

  it('It has a method that searchs documentaries by its year and returns an array with the instances', () => {
    expect(docCollection.searchYearMedia(1979)).to.be.eql([]);
    expect(docCollection.searchYearMedia(1999)).to.be.eql([new Documental("WW2", 1999, "Michael", "Historic", 120)]);
  });

  it('It has a method that prints the collection of documentaries', () => {
    docCollection.print();
    expect("print" in docCollection).to.be.true;
  });
});