import { HttpClient } from '@angular/common/http';
import { APIService } from './../../api.service';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface IData {
  id: string;
  city: string;
  region: string;
  country: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  //criando tipo de tabela responsiva
  dataSource!: MatTableDataSource<IData>;
  data: IData[] = [];
  columns: string[] = ['id', 'city', 'region', 'country'];
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private apiService: APIService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getInfo();
  }

  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getInfo() {
    this.apiService.getData().subscribe((info: any) => {
      this.data = info;

      this.data = response.data;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
}
