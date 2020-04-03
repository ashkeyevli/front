import { Component, OnInit } from '@angular/core';
import {IDish, IMenu} from '../model';
import {ProviderService} from '../provider.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.css']
})
export class DishItemComponent implements OnInit {
dish: IDish;
  constructor(private providerService: ProviderService,
              private route: ActivatedRoute) { }
   getDish(): void {
     //const id = +this.route.snapshot.paramMap.get('id');
     const dishid = +this.route.snapshot.paramMap.get('dishId');
     this.providerService.getDish(dishid).subscribe(dish => {this.dish = dish; console.log(this.dish); } );

   }

  ngOnInit(): void {
    this.getDish();
  }

}
