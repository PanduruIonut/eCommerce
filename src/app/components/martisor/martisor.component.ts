import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Martisor } from 'src/app/models/martisor';

@Component({
  selector: 'app-martisor',
  templateUrl: './martisor.component.html',
  styleUrls: ['./martisor.component.scss']
})
export class MartisorComponent implements OnInit {
  @Input() Martisor: Martisor;
  @Output() OnAddToCart: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  AddToCart() {
    this.OnAddToCart.emit(this.Martisor.Id);
  }
}
