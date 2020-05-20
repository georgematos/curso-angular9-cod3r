import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductReadTableschematicsDataSource } from './product-read-tableschematics-datasource';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-read-tableschematics',
  templateUrl: './product-read-tableschematics.component.html',
  styleUrls: ['./product-read-tableschematics.component.css']
})
export class ProductReadTableschematicsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Product>;
  dataSource: ProductReadTableschematicsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price'];

  ngOnInit() {
    this.dataSource = new ProductReadTableschematicsDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
