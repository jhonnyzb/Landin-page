import { Component, OnInit } from '@angular/core';
import { ServicesApiService } from 'src/app/services-api.service';


@Component({
  selector: 'app-films-all',
  templateUrl: './films-all.component.html',
  styleUrls: ['./films-all.component.css']
})
export class FilmsAllComponent implements OnInit {

  constructor(private services: ServicesApiService) { }
  Films: any = null;
  filmsImage:any;
  filmsInfo: any = {
    episode_id: null,
    title:'',
    opening_crawl:'',
    director:'',
    producer:'',
    release_date:''
  }

  ngOnInit() {
    this.getFilms();
    this.getImageFilms();
  }


  getFilms() {
    this.services.getfilms().subscribe(
      (res) => {
        this.Films = res;
      })
  }

getImageFilms(){
  this.filmsImage = this.services.getimageFilms()
}

  Info(data) {
    this.filmsInfo = data;
  }

}
