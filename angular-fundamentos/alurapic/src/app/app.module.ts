import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { ErrorsModule } from './errors/errors.module';
import { CoreModule } from './core/core.module';
import { GlobalErrorHandler } from './errors/global-error-handler/global-error-handler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PhotosModule,
    ErrorsModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
