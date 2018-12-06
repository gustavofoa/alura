import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auth/request.interceptor';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from '../shared/alert/alert/alert.component';

@NgModule({
  declarations: [ HeaderComponent, FooterComponent, AlertComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ 
    HeaderComponent,
    FooterComponent,
    AlertComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  }]
})
export class CoreModule { }
