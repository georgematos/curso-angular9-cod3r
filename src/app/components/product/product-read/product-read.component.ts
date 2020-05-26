import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from '../../dialog-body/dialog-body.component';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  produtos: Product[];
  displayedColumns = ["id", "name", "price", "actions"];

  constructor(
    private productService: ProductService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.productService.read().subscribe((response) => {
      this.produtos = response;
    })
  }

  openDialog(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {id: id};
    let dialogRef = this.matDialog.open(DialogBodyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  delete(id: string): void {
    this.productService.delete(id).subscribe((response) => {
      this.ngOnInit();
      this.productService.showMessage("Produto excluído com sucesso!");
    })
  }

}
