import { Component, OnInit } from '@angular/core';
import { ServicesApiService } from 'src/app/services-api.service';
@Component({
  selector: 'app-planetas-all',
  templateUrl: './planetas-all.component.html',
  styleUrls: ['./planetas-all.component.css']
})
export class PlanetasAllComponent implements OnInit {

  constructor(private services: ServicesApiService) { }

  Planets: any = null;
  planetsImage: any;
  planetsInfo: any = {
    climate: '',
    diameter: '',
    gravity: '',
    orbital_period: '',
    population: '',
    rotation_period: '',
    terrain: ''
  }

  ngOnInit() {
    this.getPlanets();
    this.getPlanetsImage();
  }


  getPlanets() {
    this.services.getplanets().subscribe(
      (res) => {
        this.Planets = res;
      })
  }

  getPlanetsImage() {
    this.planetsImage = this.services.getimagePlanets();
  }

  Info(data) {
    this.planetsInfo = data;
  }

}
