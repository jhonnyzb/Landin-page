import { Component, OnInit } from '@angular/core';
import { ServicesApiService } from 'src/app/services-api.service';

@Component({
  selector: 'app-species-all',
  templateUrl: './species-all.component.html',
  styleUrls: ['./species-all.component.css']
})
export class SpeciesAllComponent implements OnInit {

  constructor(private services: ServicesApiService) { }

  Species: any = null;
  speciesInfo: any = {
    classification: '',
    designation:'',
    eye_colors:'',
    hair_colors:'',
    language:'',
    average_lifespan:'',
  }

  ngOnInit() {
    this.getSpecies()
  }

  getSpecies() {
    this.services.getspecies().subscribe(
      (res) => {
        this.Species = res;
      })
  }

  Info(data){
    this.speciesInfo = data;
  }

}
