import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import {ItemsInfo} from '../itemsInfo';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class OrderComponent implements OnInit {
  // var myApp = angular.module('myApp', []);
  public counter = 1;



  increment() {
    this.counter += 1;
  }

  decrement() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }

 ngOnInit() {
 }
}













