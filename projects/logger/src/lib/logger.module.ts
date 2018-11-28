import { Logger, LoggerConfig, LOGGER_CONFIG } from './logger.interceptor';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Logger, multi: true }
  ],
  exports: []
})
export class LoggerModule {
  static init(config: LoggerConfig): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [{
        provide: LOGGER_CONFIG, useValue: config
      }]
    };
  }
}
