import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss'],
})
export class TablaProductosComponent implements OnInit, OnDestroy {

  productos: any;
  productosSubscripcion: Subscription;
  textoBuscar: string = '';

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.productosSubscripcion = this.productosService.getProductos().subscribe(productos => {
      this.productos = productos;
    });
  }

  ngOnDestroy(): void {
    this.productosSubscripcion.unsubscribe();
  }

  onSearchChange($event){
    this.textoBuscar = $event.detail.value;
  }
}
