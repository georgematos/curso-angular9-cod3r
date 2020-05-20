import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductReadTableschematicsDataSource, ProductReadTableschematicsItem } from './product-read-tableschematics-datasource';

@Component({
  selector: 'app-product-read-tableschematics',
  templateUrl: './product-read-tableschematics.component.html',
  styleUrls: ['./product-read-tableschematics.component.css']
})
export class ProductReadTableschematicsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ProductReadTableschematicsItem>;
  dataSource: ProductReadTableschematicsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ProductReadTableschematicsDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
