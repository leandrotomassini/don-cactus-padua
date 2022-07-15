import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';

import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  productos: Producto[] = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.productosService.getProductos().subscribe(
      respuesta => {
        this.productos = respuesta.productos;
      }
    );
  }

  onSerarchChange(event) {
    console.log(event);
  }

}
