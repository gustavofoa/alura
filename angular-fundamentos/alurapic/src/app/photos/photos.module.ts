import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";
import { HttpClientModule } from "@angular/common/http";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { CommonModule } from "@angular/common";
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescriptionPipe } from './photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { PhotoModule } from "./photo/photo.module";
import { PhotoFormModule } from "./photo-form/photo-form.module";
import { PhotoListModule } from "./photo-list/photo-list.module";

@NgModule({
    declarations: [],
    imports: [ 
        PhotoModule,
        PhotoFormModule,
        PhotoListModule
    ]
})
export class PhotosModule{

}