import { FarmaciaServiceClient } from './../../../shared/services/farmacias.service';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-web-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

    comunas: any;
    comunaSeleccionada: any = 0;
    farmaciaBuscar: any;
    constructor(private farmaciaService: FarmaciaServiceClient) { }

    async ngOnInit() {
        this.comunas = await this.obtenerComunas();

    }

    async obtenerComunas() {
        return this.farmaciaService.obtenerComunasSantiago();
    }

    async eliminarPrimerDatoArray(array) {


        return array;
    }

    async buscarFarmacia(comuna, nombre) {
        this.farmaciaService.obtenerFarmaciasPorComunaYNombrew(comuna, nombre).then((farmacias) => {
            console.log(farmacias);
        }).catch((err) => {
            console.log('Error al realizar la consulta', err);
        })
    }

    onKeydown(event) {
        if (event.key === "Enter") {
            console.log(this.farmaciaBuscar, this.comunaSeleccionada);
            this.buscarFarmacia(this.comunaSeleccionada, this.farmaciaBuscar);
        }
    }
}