import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuatro-productos',
  templateUrl: './cuatro-productos.component.html',
  styleUrls: ['./cuatro-productos.component.scss'],
})
export class CuatroProductosComponent implements OnInit {

  @Input() productos: any;

  constructor() {
   
  }

  ngOnInit() {
  }


}
