import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    log(message: any) { console.log(message); }

    warn(message: any) { console.warn(message); }

    error(message: any) { console.error(message); }
}