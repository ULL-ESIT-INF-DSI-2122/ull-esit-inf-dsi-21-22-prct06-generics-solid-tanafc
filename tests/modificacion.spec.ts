import 'mocha';
import {expect} from 'chai';
import {SearchableCollection, NumericSearchableCollection, StringSearchableCollection} from '../src/modificacion/modificacion';


describe('NumericSearchableCollection class function tests', () => {
  let numericCollection = new NumericSearchableCollection([]);

    it('It creates a new instance of an object with class NumericSearchableCollection', () => {
        expect(numericCollection).to.be.instanceOf(NumericSearchableCollection);
    });

    it('Class NumericSearchableCollection extends class SearchableCollection', () => {
        expect(NumericSearchableCollection.prototype instanceof SearchableCollection);
    });

    it('It has a method to add an Item to the collection', () => {
        numericCollection.addItem(4);
        numericCollection.addItem(5);
        numericCollection.addItem(2);
        numericCollection.addItem(2);
        expect(numericCollection.getItems()).to.be.eql([4, 5, 2, 2]);
    });

    it('It has a method to remove an item in the collection', () => {
        numericCollection.removeItem(0);
        expect(numericCollection.getItems()).to.be.eql([5, 2, 2]);
    });

    it('It has a method that returns the number of elements in the collection', () => {
        expect(numericCollection.getNumberOfItems()).to.be.equal(3);
    });

    it('It has a method that search an item and returns an array with the instances of said item found', () => {
        expect(numericCollection.search(2)).to.be.eql([2, 2]);
    });
});


describe('StringSearchableCollection class function tests', () => {
    let stringCollection = new StringSearchableCollection([]);
  
    it('It creates a new instance of an object with class StringSearchableCollection', () => {
        expect(stringCollection).to.be.instanceOf(StringSearchableCollection);
    });

    it('Class StringSearchableCollection extends class SearchableCollection', () => {
        expect(StringSearchableCollection.prototype instanceof SearchableCollection);
    });
  
    it('It has a method to add an Item to the collection', () => {
        stringCollection.addItem("hola mundo");
        stringCollection.addItem("mundo hola");
        stringCollection.addItem("amigo adios");
        stringCollection.addItem("goodbye");
        expect(stringCollection.getItems()).to.be.eql(["hola mundo", "mundo hola", "amigo adios", "goodbye"]);
    });
  
    it('It has a method to remove an item in the collection', () => {
        stringCollection.removeItem(3);
        expect(stringCollection.getItems()).to.be.eql(["hola mundo", "mundo hola", "amigo adios"]);
    });
  
    it('It has a method that returns the number of elements in the collection', () => {
        expect(stringCollection.getNumberOfItems()).to.be.equal(3);
    });
  
    it('It has a method that search an item and returns an array with the instances of said item found', () => {
        expect(stringCollection.search("hola")).to.be.eql(["hola mundo", "mundo hola"]);
    });
  });