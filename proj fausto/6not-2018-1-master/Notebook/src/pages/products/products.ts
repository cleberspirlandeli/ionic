import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {

  numProdutos: Number;
  precoNotebook : Number;

  constructor(public navCtrl: NavController) {
    this.numProdutos = 127;
    this.precoNotebook = 1990;
  }

}
