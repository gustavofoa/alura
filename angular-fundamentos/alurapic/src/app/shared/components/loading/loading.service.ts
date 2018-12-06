import { OnInit, Injectable } from '@angular/core';
import { LoadingType } from './loading-type';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService implements OnInit {

  loadingSubject = new Subject<LoadingType>();

  constructor() { }

  ngOnInit() {
  }

  getLoading(){
    return this.loadingSubject
      .asObservable()
      .pipe(startWith(LoadingType.STOPPED));
  }

  start(){
    this.loadingSubject.next(LoadingType.LOADING);
  }

  stop(){
    this.loadingSubject.next(LoadingType.STOPPED);
  }

}
