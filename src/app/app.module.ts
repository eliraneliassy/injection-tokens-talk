import { LoggerConfig, LOGGER_CONFIG } from './../../projects/logger/src/lib/logger.interceptor';
import { LoggerModule } from './../../projects/logger/src/lib/logger.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

export const config: LoggerConfig = {
  appName: 'MAIN APP'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoggerModule.init(config),
    HttpClientModule
  ],
  providers: [
    // { provide: LOGGER_CONFIG, useValue: config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
