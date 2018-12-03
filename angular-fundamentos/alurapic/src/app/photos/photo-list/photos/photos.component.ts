import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnChanges {
  

  @Input() photos: Photo[] = []

  rows: any[] = []

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.photos)
      this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: Photo[]): any[] {
    const newRows: any[] = [];

    for(let i=0;i<photos.length;i+=3)
      newRows.push(photos.slice(i, i+3));
    

    return newRows;
  }

}
