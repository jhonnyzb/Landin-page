import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesApiService {


  constructor(private httpClient: HttpClient) { }
  filmsImage: any;
  peopleImage: any;
  planetsImage: any;

  public getpeople() {
    return this.httpClient.get('https://swapi.co/api/people/');
  }

  public getplanets() {
    return this.httpClient.get('https://swapi.co/api/planets/');
  }

  public getspecies() {
    return this.httpClient.get('https://swapi.co/api/species/')
  }
  public getfilms() {
    return this.httpClient.get('https://swapi.co/api/films/')
  }
  public getvehiculos() {
    return this.httpClient.get('https://swapi.co/api/vehicles/')
  }
  public getstarchips() {
    return this.httpClient.get('https://swapi.co/api/starships/')
  }

  public getimageFilms() {
     return this.filmsImage = [
      {
        id: 1,
        title: 'https://media.metrolatam.com/2018/01/22/starwars0002layer5-600x400.jpg'
      },
      {
        id: 2,
        title: 'https://i.ytimg.com/vi/xu1RVSQn1yY/maxresdefault.jpg'
      },
      {
        id: 3,
        title: 'https://i.blogs.es/75b98c/amenaza-fantasma-poster/450_1000.jpg'
      },
      {
        id: 4,
        title: 'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/wire/legacy/revengeofthesith.jpg'
      },
      {
        id: 5,
        title: 'http://es.web.img3.acsta.net/medias/nmedia/19/00/15/19/20627165.jpg'
      },
      {
        id: 6,
        title: 'https://i.ytimg.com/vi/jxd3Ts2QDCA/maxresdefault.jpg'
      },
      {
        id: 7,
        title: 'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Star-Wars-The-Force-Awakens-Print-By-Gabs.jpg'
      }
    ]

  }
  public getimagePersonajes() {
    return this.peopleImage = [
     {
       id: 1,
       title: 'https://media.metrolatam.com/2018/12/03/lukeskywalkersableluzstarwarsafkad-454a516bfb5e4a16c018f6b9ec3ec302-600x400.jpg'
     },
     {
       id: 2,
       title: 'http://nerdgasmo.com/wp-content/uploads/2012/12/ctripio5.jpg'
     },
     {
       id: 3,
       title: 'https://images-na.ssl-images-amazon.com/images/I/411X3hGkeaL.jpg'
     },
     {
       id: 4,
       title: 'https://www.movie-object-reproduction.com/Files/17627/Img/10/Darth-Vader-Helmet-Casque-Dark-Vador-Hasbro300-zoom.jpg'
     },
     {
       id: 5,
       title: 'https://images-na.ssl-images-amazon.com/images/I/41T1t9iXGcL.jpg'
     },
     {
       id: 6,
       title: 'https://vignette.wikia.nocookie.net/starwars/images/9/91/OwenLarsHS-SWE.jpg/revision/latest?cb=20120428164235'
     },
     {
       id: 7,
       title: 'https://vignette.wikia.nocookie.net/disney/images/8/84/BeruWhitesunLars.jpg/revision/latest?cb=20121227005055'
     },
     {
      id: 8,
      title: 'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/the-mandalorian-1-e1548769470440-700x366.jpg'
    },
    {
      id: 9,
      title: 'https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=960'
    },
    {
      id: 10,
      title: 'https://imgix.bustle.com/uploads/image/2017/8/17/40d1c1e3-6adf-43b6-bdd9-32de87a810b1-screen-shot-2017-08-17-at-30952-pm.png?w=970&h=546&fit=crop&crop=faces&auto=format&q=70'
    }
   ]

 }
 public getimagePlanets() {
  return this.planetsImage = [
   {
     id: 1,
     title: 'https://vignette.wikia.nocookie.net/es.starwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20100723184830'
   },
   {
     id: 2,
     title: 'https://vignette.wikia.nocookie.net/es.starwars/images/d/d4/Yavin-4-SWCT.png/revision/latest?cb=20170924222729'
   },
   {
     id: 3,
     title: 'https://vignette.wikia.nocookie.net/es.starwars/images/1/1d/Hoth_SWCT.png/revision/latest?cb=20170802030704'
   },
   {
     id: 4,
     title: 'https://vignette.wikia.nocookie.net/es.starwars/images/1/1c/Dagobah.jpg/revision/latest?cb=20061117132132'
   },
   {
     id: 5,
     title: 'https://vignette.wikia.nocookie.net/es.starwars/images/1/11/Bespin-SWCT.png/revision/latest?cb=20170924173926'
   },
   {
     id: 6,
     title: 'https://vignette.wikia.nocookie.net/es.starwars/images/e/e1/Endor2.JPG/revision/latest?cb=20130907135939'
   },
   {
     id: 7,
     title: 'https://vignette.wikia.nocookie.net/es.starwars/images/5/50/Naboo.jpg/revision/latest?cb=20060318190228'
   },
   {
    id: 8,
    title: 'https://vignette.wikia.nocookie.net/es.starwars/images/1/17/Coruscant-AoTCW.jpg/revision/latest?cb=20100213220520'
  },
  {
    id: 9,
    title: 'http://4.bp.blogspot.com/_wIW55V-xC00/Scw8ov-bvBI/AAAAAAAABEs/pF1aHOY46EA/s400/KaminoEAW.jpg'
  },
  {
    id: 10,
    title: 'http://media.indiedb.com/images/members/1/459/458852/Geonosis.jpg'
  }
 ]

}
}
