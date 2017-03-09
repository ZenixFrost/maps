import { Component, OnInit } from '@angular/core';
import {LatLngLiteral} from "angular2-google-maps/core";

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

  constructor() { }

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
      }
    }
  }

  linemouseUp(event){

    if(this.points.length > 0){
      if(event.latLng.lat() == this.points[0].lat && event.latLng.lng()  == this.points[0].lng){
        this.paths =  this.points;
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

