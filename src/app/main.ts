/// <reference path="../../node_modules/typescript/lib/lib.es6.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { LoggerService } from './common/services/index';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    LoggerService
])
.then(success => console.log('Bootstrap success'))
.catch(error => console.log('Bootstrap error : ' + error));