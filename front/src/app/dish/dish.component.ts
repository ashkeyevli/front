import {Component, Input, OnInit} from '@angular/core';
import {IDish, IMenu} from '../model';
import {ProviderService} from '../provider.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
dishes: IDish[] = [];


 constructor(private providerService: ProviderService,
             private route: ActivatedRoute) { }

  getDishes(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.providerService.getDishes(id).subscribe(dishes => {this.dishes = dishes; console.log(this.dishes); } );

  }


  ngOnInit(): void {
    this.getDishes();
    console.log(this.route.snapshot.paramMap.get('id'));
    console.log(this.dishes);
  }

}
