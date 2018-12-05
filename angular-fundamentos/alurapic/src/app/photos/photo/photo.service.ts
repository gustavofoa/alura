import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";
import { Observable } from "rxjs";

const API = 'http://localhost:3000/';

@Injectable({providedIn: 'root'})
export class PhotoService{

    constructor(private http: HttpClient){}

    listFromUser(username: string): Observable<Photo[]>{
        return this.http.get<Photo[]>(`${API}${username}/photos`);
    }

    listFromUserPaginated(username: string, page:number): Observable<Photo[]>{
        const params = new HttpParams().append('page', page.toString());
        return this.http.get<Photo[]>(`${API}${username}/photos`, { params });
    }

    upload(description: string, allowComments: boolean, file: File){

        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? "true" : "false");
        formData.append('imageFile', file)

        return this.http.post(API + 'photos/upload', formData);
        
    }

}