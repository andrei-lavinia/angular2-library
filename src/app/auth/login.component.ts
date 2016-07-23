import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './index';

@Component({
    template: `
    <p>{{message}}</p>
    <p>
      <button (click)="login()"  *ngIf="!authService.isLoggedIn">Login</button>
      <button (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
    </p>`
})
export class LoginComponent {
    message: string;

    constructor(
        @Inject(AuthService) private authService: AuthService,
        @Inject(Router) private router: Router) {
        this.setMessage();
    }

    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    login() {
        this.message = 'Trying to log in ...';

        this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                this.router.navigate(['/books']);
            }
        });
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }
}