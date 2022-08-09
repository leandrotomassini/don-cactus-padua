import { Component, OnInit } from '@angular/core';
import { ProductosData } from 'src/app/pages/growshop/growshop.page';

@Component({
  selector: 'app-seis-productos',
  templateUrl: './seis-productos.component.html',
  styleUrls: ['./seis-productos.component.scss'],
})
export class SeisProductosComponent implements OnInit, ProductosData {

  data: any;
  titulo: any;
  
  constructor() { }

  ngOnInit() {}

}
