import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { ProductsPage } from 'src/app/pages/products/products.page';
import { Martisor } from 'src/app/models/martisor';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() cartList: Martisor[];
  
  public cartSize:number;
  
  constructor() { 
  }
  ngOnInit() {
    setTimeout(function(){
      console.log(this.cartList);
      
  }, 2000);
  }
}
