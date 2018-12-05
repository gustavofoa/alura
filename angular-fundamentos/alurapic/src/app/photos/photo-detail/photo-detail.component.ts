import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {
  
  photo$: Observable<Photo>;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(id)
  }

}
