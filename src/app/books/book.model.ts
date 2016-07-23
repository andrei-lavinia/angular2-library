export class Book {
    id: number;
    title: string;
    author: string;
    publisher: string;
    category: string;
    rating: number;
    totalCopies: number;
    loanedCopies: number;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
}