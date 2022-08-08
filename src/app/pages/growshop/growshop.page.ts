import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-growshop',
  templateUrl: './growshop.page.html',
  styleUrls: ['./growshop.page.scss'],
})
export class GrowshopPage implements OnInit, OnDestroy {

  productosSubscripcion: Subscription;
  productos: any;

  etiqueasDisponibles: any[] = [];
  categoriasDisponiles: any[] = [];

  productosTemporales: any[] = [];
  publicaciones: any[] = [];

  constructor(private productosService: ProductosService) { }

  async ngOnInit() {
    this.productosSubscripcion = await this.productosService.getProductos().subscribe(productos => {
      this.productos = productos;
      this.mostrarProductos();
    });
  }

  ngOnDestroy(): void {
    this.productosSubscripcion.unsubscribe();
  }

  mostrarProductos() {

    this.productos.forEach(producto => {

      this.productosTemporales.push(producto);

      if (this.productosTemporales.length > 3) {
        this.publicaciones.push(this.productosTemporales);
        this.productosTemporales = [];
      }

    });

    console.log(this.publicaciones.length);
    console.log(this.productos.length);
  }


  cargarCategoriasEtiquetas() {

    this.productos.forEach(producto => {
      producto.etiquetas.forEach(etiqueta => {
        if (!this.etiqueasDisponibles.includes(etiqueta.nombre)) {
          this.etiqueasDisponibles.push(etiqueta.nombre);
        }
      });

      if (!this.categoriasDisponiles.includes(producto.categoria.nombre)) {
        this.categoriasDisponiles.push(producto.categoria.nombre);
      }
    });
  }


}
