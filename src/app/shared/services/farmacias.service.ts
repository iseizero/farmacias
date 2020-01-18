import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FarmaciaServiceClient {
    constructor(private http: HttpClient){ }

    obtenerComunasSantiago(){
        return this.http.get('').toPromise()
    }
}