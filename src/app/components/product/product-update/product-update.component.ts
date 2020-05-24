import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {  

  public product: Product;
  public productId: string;
  public queryParams: string;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.readById(this.queryParams).subscribe((product) => {
      this.product = product;
    })
  }

  salvar() {

  }

  cancelar() {

  }
}
