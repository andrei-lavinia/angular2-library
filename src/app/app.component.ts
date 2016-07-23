import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { BookService } from './books/index';

@Component({
    selector: 'app-library',
    templateUrl: 'app/app.component.html',
    providers: [
        BookService
    ],
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}