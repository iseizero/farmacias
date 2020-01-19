import { FarmaciaServiceClient } from './../../../shared/services/farmacias.service';
import { Component, OnInit } from "@angular/core";
import * as mapboxgl from 'mapbox-gl';

@Component({
    selector: 'app-web-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {


    geoJson: any;

    type: String = "Point";

    map: mapboxgl.Map;
    style = 'mapbox://styles/mapbox/streets-v11';
    lat = -33.4726900;
    lng = -70.6472400;

    comunas: any;
    comunaSeleccionada: any = 0;
    farmaciaBuscar: any;
    constructor(private farmaciaService: FarmaciaServiceClient) { }

    async ngOnInit() {

        this.comunas = await this.obtenerComunas();

        Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('pk.eyJ1IjoiaXNlaXplcm8iLCJhIjoiY2s1azl4aXkxMGJ4NTNubzd4Y2piNncwNSJ9.78n5xewCetGIdlxbbiUs7Q');

        this.map = new mapboxgl.Map({
            container: 'map',
            style: this.style,
            zoom: 9,
            center: [this.lng, this.lat],
        });


        this.map.addControl(new mapboxgl.NavigationControl());

    }

    async obtenerComunas() {
        return this.farmaciaService.obtenerComunasSantiago();
    }

    async buscarFarmacia(comuna, nombre) {
        this.farmaciaService.obtenerFarmaciasPorComunaYNombrew(comuna, nombre).then((farmacias) => {
            this.formatArrayPoints(farmacias);
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


    async setMapPoints(array) {
        
        // this.map.on('load', () => {
            
        // })

        this.map.addSource('pointSource', {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: array
            }
        });

        this.map.addLayer({
            id: 'map',
            source: 'pointSource',
            type: 'circle'
        });
    }


    formatArrayPoints(data) {
        let auxPoints : any[] = [];
        let bodyData: any = {
            type: 'Feature',
            geometry:{
                type:'Point',
                coordinates: []
            }
        };

        data.forEach((item: any) => {
            bodyData.geometry.coordinates.lat = parseFloat(item.local_lat);
            bodyData.geometry.coordinates.lng = parseFloat(item.local_lng);
            auxPoints.push(bodyData);
        });

        this.setMapPoints(auxPoints);
    }

}