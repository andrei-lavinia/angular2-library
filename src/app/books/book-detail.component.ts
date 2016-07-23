import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Book, BookService } from './index';

@Component({
    selector: 'app-book-detail',
    templateUrl: 'app/books/book-detail.component.html'
})
export class BookDetailComponent implements OnInit {
    public book: Book;

    constructor(
        @Inject(ActivatedRoute) private route: ActivatedRoute,
        @Inject(Router) private router: Router,
        @Inject(BookService) private bookService: BookService) { }

    ngOnInit() {
        let id = +this.route.snapshot.params['id'];
        this.book = this.bookService.getBook(id);
    }

    gotoBooks() {
        let bookId = this.book ? this.book.id : null;
        this.router.navigate(['/books'], { queryParams: { id: bookId } });
    }
}