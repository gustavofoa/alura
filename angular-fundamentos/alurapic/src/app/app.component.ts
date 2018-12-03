import { Component } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Alurapic';
  photos: Object[] = []

  constructor(photoService: PhotoService) {

    photoService.listFromUser('flavio')
    .subscribe(
      photos => {
        console.log(photos[0].description);
        this.photos = photos;
      },
      err => console.log(err)
    );

  }
}
