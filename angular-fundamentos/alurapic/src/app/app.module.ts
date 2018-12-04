import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './core/header/header.component';
import { CoreModule } from './core/core.module';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
