import { Component, OnInit } from '@angular/core';
import { ServicesApiService } from 'src/app/services-api.service';

@Component({
  selector: 'app-starchips-all',
  templateUrl: './starchips-all.component.html',
  styleUrls: ['./starchips-all.component.css']
})
export class StarchipsAllComponent implements OnInit {

  constructor(private services: ServicesApiService) { }
  Starchips: any = null;
  starchipsInfo: any = {
    cargo_capacity: '',
    consumables:'',
    cost_in_credits:'',
    manufacturer:'',
    model:'',
    passengers:'',
  }



  ngOnInit() {
    this.getStarchips();
  }

  getStarchips() {
    this.services.getstarchips().subscribe(
      (res) => {
        this.Starchips = res;
      })
  }


  Info(data){
    this.starchipsInfo = data;
  }
}
