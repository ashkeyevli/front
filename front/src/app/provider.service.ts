import { Injectable } from '@angular/core';
import {IDish, IMenu} from './model';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MainService} from './main.service';
import {getErrorMessage} from "codelyzer/templateAccessibilityElementsContentRule";

@Injectable({
  providedIn: 'root'
})
export class ProviderService  {
  constructor(private http: HttpClient) {

  }
  private menuUrl = 'api/menu';


  getMenu(): Observable<IMenu[]> {
    const url = this.menuUrl;
    return this.http.get<IMenu[]>(url);
}
  // getDishes(restaurantId: string): Promise<IDish[]> {
  //   return this.get(`http://localhost:8000/api/restaurants/${restaurantId}/dishes/`, {});
  // }
  // getDishes(menuId: number): Promise<IDish[]> {
  //   // const url = `${this.menuUrl}/${menuId}`;
  //   return this.get(`${this.menuUrl}/${menuId}/dishes`, {});
  // }
// getDishes(menuId: number): Observable<IDish[]> {
//     return this.get(`menu/${menuId}/dishes`, {});
// }




  // getMenuItem(menuId: number): Observable<IMenu> {
  //   const url = `${this.menuUrl}/${menuId}`;
  //   return this.http.get<IMenu>(url);
  // }
getDishes(menuId: number): Observable<IDish[]> {
    const url = `api/menu/${menuId}/dishes`;
    console.log(url);
    return this.http.get<IDish[]>(url);
}

  getDish(dishId: number): Observable<IDish> {
    const url = `api/dishes/${dishId}`;
    return this.http.get<IDish>(url);
  }



}

  // {this.menuUrl}/${menuId}/$
