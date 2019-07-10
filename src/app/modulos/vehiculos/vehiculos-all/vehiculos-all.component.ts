import { Component, OnInit } from '@angular/core';
import { ServicesApiService } from 'src/app/services-api.service';

@Component({
  selector: 'app-vehiculos-all',
  templateUrl: './vehiculos-all.component.html',
  styleUrls: ['./vehiculos-all.component.css']
})
export class VehiculosAllComponent implements OnInit {

  constructor(private services: ServicesApiService) { }
  Vehiculos: any = null;
  vehiculosInfo: any = {
    cargo_capacity: '',
    consumables:'',
    cost_in_credits:'',
    manufacturer:'',
    model:'',
    passengers:'',
  }


  ngOnInit() {
    this.getVehiculos();
  }

  getVehiculos() {
    this.services.getvehiculos().subscribe(
      (res) => {
        this.Vehiculos = res;
      })
  }

  Info(data){
    this.vehiculosInfo = data;
  }

}
