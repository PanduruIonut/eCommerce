import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Martisor } from 'src/app/models/martisor';
import { NgbRadio } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {

  public sendCartList: Martisor[];

  public martisorList:Array<Martisor>;
  public cartList:Array<Martisor>;
  public cartListSize:number;

  constructor() {
    this.martisorList=new Array<Martisor>();
    this.cartList=new Array<Martisor>();

   }

  ngOnInit() {
    this.initializeList();
  }

  initializeList(){
    let picture = "../../../assets/images/martisor.jpg"

    this.martisorList.push({Id:0,Picture:picture,Name:"Martisor1",Description:"Description",Price:10})
    this.martisorList.push({Id:1,Picture:picture,Name:"martisorex",Description:"Description",Price:10})
    this.martisorList.push({Id:2,Picture:picture,Name:"Martisor1",Description:"Description",Price:10})
    this.martisorList.push({Id:3,Picture:picture,Name:"Martisor1",Description:"Description",Price:10})
    this.martisorList.push({Id:4,Picture:picture,Name:"Martisor1",Description:"Description",Price:10})
    this.martisorList.push({Id:5,Picture:picture,Name:"Martisor1",Description:"Description",Price:10})
    this.martisorList.push({Id:6,Picture:picture,Name:"Martisor1",Description:"Description",Price:10})
    this.martisorList.push({Id:7,Picture:picture,Name:"Martisor1",Description:"Description",Price:10})
    this.martisorList.push({Id:8,Picture:picture,Name:"Martisor1",Description:"Description",Price:10})
    this.martisorList.push({Id:9,Picture:picture,Name:"Martisor1",Description:"Description",Price:10})

  }

  AddToCart(id:number){
    let selectedMartisor=this.martisorList.filter(item => item.Id==id);
    this.cartList.push(selectedMartisor[0]);
    console.log(this.cartList);
    this.cartListSize = this.cartList.length;
  }
}
