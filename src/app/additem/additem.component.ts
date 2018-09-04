import { Component, OnInit } from '@angular/core';
import { ItemsInfo } from '../itemsInfo';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  public data: ItemsInfo[] = [
    {'name': 'Samsung Galaxy J8', 'id': '101', 'price': 14000},
    {'name': 'Redmi Y2', 'id': '102', 'price': 15000},
    {'name': 'Vivo V9', 'id': '103', 'price': 16000},
  ];

  getTotal(event) {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
