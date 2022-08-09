import { Component, OnInit } from '@angular/core';

import { ProductosData } from 'src/app/pages/growshop/growshop.page';

@Component({
  selector: 'app-un-producto',
  templateUrl: './un-producto.component.html',
  styleUrls: ['./un-producto.component.scss'],
})
export class UnProductoComponent implements OnInit, ProductosData {

  data: any;
  titulo: any;
  
  constructor() { }

  ngOnInit() { }

}
