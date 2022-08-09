import { Component, Input, OnInit } from '@angular/core';
import { ProductosData } from 'src/app/pages/growshop/growshop.page';



@Component({
  selector: 'app-cuatro-productos',
  templateUrl: './cuatro-productos.component.html',
  styleUrls: ['./cuatro-productos.component.scss'],
})
export class CuatroProductosComponent implements OnInit, ProductosData {

  data: any;

  
  constructor() { }
  
  
  ngOnInit() {
    console.log("Cuatro productos" , this.data)
  }


}
