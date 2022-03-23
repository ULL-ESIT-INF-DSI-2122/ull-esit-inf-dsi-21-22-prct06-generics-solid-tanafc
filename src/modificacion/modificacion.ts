/**
 * Interface that specifies methods for a collection
 */
interface Collectable<T> {
    addItem(item: T): void;
    getItem(index: number): T;
    removeItem(index: number): void;
    getNumberOfItems(): number;
}

/**
 * Interface that specifies methods for searching in a collection
 */
interface Searchable<T> {
    search(term: T): T[] | undefined;
}

/**
 * Abstract class that defines a collection of a generic type and implements methods
 * of the interfaces of Collectable and Searchable for the collection.
 */
export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
    constructor(protected items: T[]) {
    }

    public getItems(): T[] {
        return this.items;
    }

    public addItem(item: T): void {
        this.items.push(item);
    }

    public getItem(index: number): T {
        return this.items[index];
    }

    public removeItem(index: number): void {
        this.items.splice(index, 1);
    }

    public getNumberOfItems(): number {
        return this.items.length;
    }

    abstract search(term: T): T[] | undefined;
}

/**
 * Class NumericSearchableCollection that specifies a Collection of numeric
 * values. It extends the abstract class SearchableCollection and implements
 * the method search().
 */
export class NumericSearchableCollection extends SearchableCollection<number> {
    constructor(items: number[]) {
        super(items);
    }

    public search(term: number): number[] | undefined {
        return this.items.filter((item) => item === term);
    }
}

/**
 * Class StringSearchableCollection that specifies a Collection of strings.
 * It extends the abstract class SearchableCollection and implements
 * the method search().
 */
export class StringSearchableCollection extends SearchableCollection<string> {
    constructor(items: string[]) {
        super(items);
    }

    public search(subString: string): string[] | undefined {
        return this.items.filter((item) => item.includes(subString));
    }
}