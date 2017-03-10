import { Component, OnInit } from '@angular/core';
import {LatLngLiteral} from "angular2-google-maps/core";

import { MapsAPILoader } from 'angular2-google-maps/core';
declare var google: any;

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  //**กำหนดความขาวของ map ใน google-map.component.css

  lat: number = 51.678418;
  lng: number = 7.809007;

  choice:number = 0;

  marks = [];
  points = [];
  pointsMap = [];
  circles = [];
  paths:Array<LatLngLiteral> = [];

  area;
  distance;

  constructor(private mapsAPILoader: MapsAPILoader) { }

  ngOnInit() {
  }

  drawMap(event){
    if(this.choice != 0){
      if(this.choice == 1){
        this.marks.push({lat: event.coords.lat, lng: event.coords.lng});
      }else if(this.choice == 2){
        this.circles.push({lat: event.coords.lat, lng: event.coords.lng});
      }else if(this.choice == 3){
        this.points.push({lat: event.coords.lat, lng: event.coords.lng});
      }else if(this.choice == 4){
        this.pointsMap.push({lat: event.coords.lat, lng: event.coords.lng});

        if(this.pointsMap.length >= 2){
          this.mapsAPILoader.load().then(() => {
            let locations = [];

            for(let i=0;i<this.pointsMap.length;i++){
              locations[i] = new google.maps.LatLng(this.pointsMap[i].lat, this.pointsMap[i].lng)
            }
            this.distance = google.maps.geometry.spherical.computeLength(locations);
            console.log(this.distance);
          });
        }

      }
    }
  }

  linemouseUp(event){

    if(this.points.length > 0){
      if(event.latLng.lat() == this.points[0].lat && event.latLng.lng()  == this.points[0].lng){
        this.paths =  this.points;

        this.mapsAPILoader.load().then(() => {
          let locations = [];
          for(let i=0;i<this.paths.length;i++){
            locations[i] = new google.maps.LatLng(this.paths[i].lat, this.paths[i].lng)
          }
          this.area = google.maps.geometry.spherical.computeArea(locations);
          console.log( this.area);
        });

        this.points = [];
      }
    }
  }

  getChoice(num:number){
    this.choice = num;
  }

  reset(){
    this.marks = [];
    this.points = [];
    this.pointsMap = [];
    this.circles = [];
    this.paths = [];
  }

}

