import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProductService } from '../product/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogBodyComponent>,
    private productService: ProductService,
    
    @Inject(MAT_DIALOG_DATA) 
    public data: any
  ) { }

  ngOnInit(): void {
  }

  onOk() {
    this.productService.delete(this.data.id).subscribe((response) => {
      this.productService.showMessage("Produto excluído com sucesso!");
      this.dialogRef.close();
    })
  }

  onCancel() {
    this.dialogRef.close();
  }

}
