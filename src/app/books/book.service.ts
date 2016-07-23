import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Book } from './index';
import { LoggerService } from '../common/services/index';

@Injectable()
export class BookService {
    public books: Book[];

    constructor(
        @Inject(Http) private http: Http,
        @Inject(LoggerService) private logger: LoggerService) { }

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
        this.logger.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}