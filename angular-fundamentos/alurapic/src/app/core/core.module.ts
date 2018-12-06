import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auth/request.interceptor';
import { FooterComponent } from './footer/footer.component';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { AlertModule } from '../shared/components/alert/alert.module';

@NgModule({
  declarations: [ HeaderComponent, FooterComponent ],
  imports: [
    CommonModule,
    RouterModule,
    AlertModule,
    LoadingModule
  ],
  exports: [ 
    HeaderComponent,
    FooterComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  }]
})
export class CoreModule { }
