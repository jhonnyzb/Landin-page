import { Component, OnInit } from '@angular/core';
import { ServicesApiService } from 'src/app/services-api.service';

@Component({
  selector: 'app-people-all',
  templateUrl: './people-all.component.html',
  styleUrls: ['./people-all.component.css']
})
export class PeopleAllComponent implements OnInit {

  constructor(private services: ServicesApiService) { }

  People: any = null;
  peopleImage: any;
  peopleInfo: any = {
    name: '',
    gender:'',
    height:'',
    eye_color:'',
    birth_year:'',
    skin_color:''
  }

  ngOnInit() {
    this.getPeople();
    this.getImagepeople();
  }

  getPeople() {
    this.services.getpeople().subscribe(
      (res) => {
        this.People = res;
      })
  }

  getImagepeople(){
    this.peopleImage = this.services.getimagePersonajes();
  }

  Info(data){
    this.peopleInfo = data;
  }

}
