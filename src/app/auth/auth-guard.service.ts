import { Injectable, Inject } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        @Inject(AuthService) private authService: AuthService,
        @Inject(Router) private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        if (this.authService.isLoggedIn) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}