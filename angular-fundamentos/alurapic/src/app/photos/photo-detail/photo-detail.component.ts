import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/shared/alert/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'ap-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {
  
  photo$: Observable<Photo>;
  photoId: number;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.photoId = this.activatedRoute.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe(
      () => {},
      err => {
        console.log(err);
        this.router.navigate(["not-found"])
      }
    )
  }

  remove(){
    this.photoService
      .removePhoto(this.photoId)
      .subscribe(() => {
        this.alertService.success("Photo removed!", true);
        this.router.navigate(['/user/'+this.userService.getUserName()]);
      }, 
      err => {
        console.log(err)
        this.alertService.warning("Could not delete the photo!", true);
        this.router.navigate(['']);
      });
  }

}
