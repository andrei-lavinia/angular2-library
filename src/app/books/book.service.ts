import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Book } from './index';

@Injectable()
export class BookService {
    public books: Book[];

    constructor(
        @Inject(Http) private http: Http) { }

    getBooks(value?: string): Observable<Book[]> {
        return this.http.get('api/books.json')
            .map((response: Response) => <Book[]>response.json().data)
            .catch(this.handleError);
    }

    getBook(id: number | string): Book {
        if (!this.books) {
            return null;
        }

        return this.books.filter(b => b.id === +id)[0];
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}