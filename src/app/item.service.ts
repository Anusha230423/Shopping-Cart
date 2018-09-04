import { Injectable } from '@angular/core';
const ITEMS = [
  { item: 'Samsung Galaxy J8', qty: '2'},
  { title: 'Style app', qty: '1'},
];
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor() { }
  getItems() {
    return new Promise(resolve => resolve(ITEMS));
  }
}
