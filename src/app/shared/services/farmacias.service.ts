import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FarmaciaServiceClient {
    constructor(private http: HttpClient){ }

    obtenerComunasSantiago(){
        return this.http.get('http://localhost:8080/v1/api/farmacias/obtenerComunas').toPromise()
    }

    /**
     * 
     * @param comuna comuna que se desea filtrar
     * @param nombre nombre de la farmacia abuscar
     */
    obtenerFarmaciasPorComunaYNombrew(comuna, nombre){

        let body = {
            comuna: comuna,
            nombre_de_local: nombre.toUpperCase()
        }

        debugger;
        return this.http.post(`http://localhost:8080/v1/api/farmacias/obtenerFarmacias`, body).toPromise();
    }
}