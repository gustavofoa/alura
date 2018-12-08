import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ NotFoundComponent, GlobalErrorComponent, GlobalErrorComponent ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ErrorsModule { }
