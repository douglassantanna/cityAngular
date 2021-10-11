import { HttpClient } from '@angular/common/http';
import { APIService } from 'src/app/shared/service/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

//definindo os elementos que serão mostrados
interface IData {
  id: string;
  city: string;
  region: string;
  country: string;
}

@Component({
  selector: 'app-city-table',
  templateUrl: './city-table.component.html',
  styleUrls: ['./city-table.component.css']
})
export class CityTableComponent implements OnInit {
  //criando tipo de tabela responsiva
  dataSource!: MatTableDataSource<IData>;
  data: IData[] = [];
  //nome das colunas que apareceram na tabela
  columns: string[] = ['id', 'city', 'region', 'country'];
  //sort
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  //paginacao
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    //chamando método api
    this.getInfo();
  }

  //filtro
  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getInfo() {
    //método para chamar a api e subscribe
    this.apiService.getData().subscribe(info => {
      this.data = info;
      //inserimento dos dados recebidos na tabela
      this.dataSource = new MatTableDataSource(this.data);
      //sort dos dados recebidos
      this.dataSource.sort = this.sort;
      //paginação dos dados recebidos
      this.dataSource.paginator = this.paginator;
    });
  }
}
