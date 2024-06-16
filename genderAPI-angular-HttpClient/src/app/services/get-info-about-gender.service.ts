import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenderInfo } from '../models/gender.model';

@Injectable({
    providedIn: 'root'
})
export class GetInfoAboutGenderService {

    constructor(
        private http: HttpClient) { }

    

    public getInfoAboutName(name:string):Observable<GenderInfo>{
        const apiUrl: string =('https://api.genderize.io/?name='+ name).toString();
        return this.http.get<GenderInfo>(apiUrl);
    }
}
