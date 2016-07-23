import { provideRouter, RouterConfig }  from '@angular/router';

import { PageNotFoundComponent } from './not-found.component';
import { BooksRoutes } from './books/index';
import {
    LoginRoutes,
    AuthGuard,
    AuthService
} from './auth/index';
import { CanDeactivateGuard } from './common/services/index';

export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    ...BooksRoutes,
    ...LoginRoutes,
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    AuthGuard,
    AuthService,
    CanDeactivateGuard
];