import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InjectionToken, Inject } from '@angular/core';

export interface LoggerConfig {
    appName: string;
}
export const LOGGER_CONFIG = new InjectionToken<LoggerConfig>('Logger config');
export class Logger implements HttpInterceptor {

    constructor(@Inject(LOGGER_CONFIG) private config: LoggerConfig) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.group('Logger Output from app: ' + this.config.appName);
        console.log(req);
        console.groupEnd();

        return next.handle(req);
    }
}
