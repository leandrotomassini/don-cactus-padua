import { Component, OnInit } from '@angular/core';
import { ProductosData } from 'src/app/pages/growshop/growshop.page';

@Component({
  selector: 'app-tres-productos',
  templateUrl: './tres-productos.component.html',
  styleUrls: ['./tres-productos.component.scss'],
})
export class TresProductosComponent implements OnInit, ProductosData {
  
  data: any;
  
  constructor() { }

  ngOnInit() {}

}
