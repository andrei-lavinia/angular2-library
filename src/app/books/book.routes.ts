import { RouterConfig } from '@angular/router';

import {
    BookListComponent,
    BookDetailComponent
} from './index';
import { CanDeactivateGuard } from '../common/services/index';
import { AuthGuard } from '../auth/index';

export const BooksRoutes: RouterConfig = [
    {
        path: 'book/:id',
        component: BookDetailComponent,
        canDeactivate: [CanDeactivateGuard]
    },
    {
        path: 'books',
        component: BookListComponent,
        canActivate: [AuthGuard]
    }
];