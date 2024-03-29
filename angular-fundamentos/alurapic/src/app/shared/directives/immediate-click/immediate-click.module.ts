import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImmediateClickDirective } from './immediate-click.directive';

@NgModule({
  declarations: [ ImmediateClickDirective ],
  imports: [
    CommonModule
  ],
  exports: [ ImmediateClickDirective ]
})
export class ImmediateClickModule { }
