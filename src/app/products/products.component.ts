import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { Router } from '@angular/router';
import { Products } from '../models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[];

  constructor(    
    private router: Router,
    private ApiService: ApiService) 
    {
      this.ApiService.isAuthenticated();
      this.listProducts();
    }
  ngOnInit() {
  }

  listProducts() {
    this.ApiService.listProducts().subscribe((product: Products[]) => {
        this.products = product;
        console.log(this.products);
    })
}
}
