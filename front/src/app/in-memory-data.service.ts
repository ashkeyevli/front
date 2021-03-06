import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {IMenu, IDish} from './model';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const menu = [
      {
        id: 1,
        name: 'drinks',
        image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/07/Arbuznyj-fresh-min.jpg'
      }
      ,
      {
        id: 2,
        name: 'salads',
        image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/01/maxresdefault.jpg'
      }
    ];
    const dishes = [
      {
        id: 1,
        menu: 1,
        // menu: {id: 1, name: 'drinks',
        // image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/07/Arbuznyj-fresh-min.jpg'},
        name: 'Апельсин Свежевыжатый 300 мл',
        price: 995,
        image_url: 'https://ala.basilic.kz/wp-content/uploads/2019/06/Svezhevyzhatyj-Apelsin1.jpg',
        description: 'Свежевыжатый сок из апельсина в бутылке 300 мл.'
      },
      {
        id: 3,
        menu: 1,
        // menu: {id: 1, name: 'drinks',
        // image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/07/Arbuznyj-fresh-min.jpg'},
        name: 'Apple Свежевыжатый 300 мл',
        price: 995,
        image_url: 'https://ala.basilic.kz/wp-content/uploads/2019/06/Svezhevyzhatyj-Apelsin1.jpg',
        description: 'Свежевыжатый сок из apple в бутылке 300 мл.'
      },
      {
        id: 2,
        menu: 2,
        // menu: {id: 1, name: 'drinks',
        // image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/07/Arbuznyj-fresh-min.jpg'},
        name: 'Boom',
        price: 995,
        image_url: 'https://ala.basilic.kz/wp-content/uploads/2019/06/Svezhevyzhatyj-Apelsin1.jpg',
        description: 'norm tak salat'
      }

    ];
    return {dishes, menu};
  }

// ,
x
//   genId(menu: IMenu[]): number {
//     return menu.length > 0 ? Math.max(...menu.map( menuitem => menuitem.id)) + 1 : 1;
//   }
  constructor() { }
}
