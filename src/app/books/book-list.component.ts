import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Book, BookService } from './index';
import { LoggerService } from '../common/services/index';

@Component({
    selector: 'app-books',
    templateUrl: 'app/books/book-list.component.html'
})
export class BookListComponent implements OnInit, OnDestroy {
    public books: Book[];

    private selectedId: number;
    private paramsSubscription: any;

    constructor(
        @Inject(ActivatedRoute) private route: ActivatedRoute,
        @Inject(Router) private router: Router,
        @Inject(BookService) private bookService: BookService,
        @Inject(LoggerService) private logger: LoggerService) { }

    ngOnInit() {
        this.paramsSubscription = this.router
            .routerState
            .queryParams
            .map(params => +params['id'] || 0)
            .subscribe(
                data => this.selectedId = data
            );

        this.getBooks();
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }

    isSelected(bookId: number) { return bookId === this.selectedId; }

    selectBook(book: Book) {
        this.router.navigate(['/book', book.id]);
    }

    getBooks() {
        this.bookService.getBooks().subscribe(
            data => {
                this.books = data;
                this.bookService.books = data;
            },
            error => this.logger.error(error),
            () => this.logger.log('Get books completed')
        );
    }
}