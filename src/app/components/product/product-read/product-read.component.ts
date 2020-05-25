import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  produtos: Product[];
  displayedColumns = ["id", "name", "price", "actions"];
  dialogTitle = "Deseja excluir este produto?";

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.read().subscribe((response) => {
      this.produtos = response;
    })
  }

  delete(id: string): void {
    this.productService.delete(id).subscribe((response) => {
      this.ngOnInit();
      this.productService.showMessage("Produto excluído com sucesso!");
    })
  }

}
