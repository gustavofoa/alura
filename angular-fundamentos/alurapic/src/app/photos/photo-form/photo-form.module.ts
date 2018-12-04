import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form.component';
import { VMessageComponent } from 'src/app/shared/components/vmessage/vmessage.component';

@NgModule({
  declarations: [
    PhotoFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PhotoFormModule { }
