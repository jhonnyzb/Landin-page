import { Component, OnInit } from '@angular/core';
import { ServicesApiService } from 'src/app/services-api.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  constructor(private services: ServicesApiService) { }
  Films: any = null;
  Imagefilms:any;

  ngOnInit() {
    this.getFilms()
    this.getFilmsimage();
  }


  getFilms() {
    this.services.getfilms().subscribe(
      (res) => {
        this.Films = res;
      })
  }

  getFilmsimage(){
    this.Imagefilms = this.services.getimageFilms()
  }

}
