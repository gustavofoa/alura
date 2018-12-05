import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailComponent } from './photo-detail.component';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
  declarations: [ PhotoDetailComponent ],
  imports: [
    CommonModule,
    PhotoModule
  ],
  exports: [ PhotoDetailComponent ]
})
export class PhotoDetailModule { }
