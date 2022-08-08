import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CuatroProductosComponent } from 'src/app/components/publicaciones/cuatro-productos/cuatro-productos.component';
import { TresProductosComponent } from 'src/app/components/publicaciones/tres-productos/tres-productos.component';

import { DynamicComponentDirective } from 'src/app/directives/dynamic-components.directive';

import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-growshop',
  templateUrl: './growshop.page.html',
  styleUrls: ['./growshop.page.scss'],
})
export class GrowshopPage implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(DynamicComponentDirective) dynamic: DynamicComponentDirective;

  productosSubscripcion: Subscription;
  productos: any;

  etiquetas: any[] = [];
  categorias: any[] = [];


  constructor(private productosService: ProductosService) { }

  ngAfterViewInit() {
  }

  async ngOnInit() {
    this.productosSubscripcion = await this.productosService
      .getProductos()
      .subscribe(productos => {
        this.productos = productos;
        this.mostrarProductos();
      });
  }

  ngOnDestroy(): void {
    this.productosSubscripcion.unsubscribe();
  }

  mostrarProductos() {
    this.obtenerEtiquetas();
    this.obtenerCategorias();

    console.log(this.categorias);
    console.log(this.etiquetas);
    console.log(this.productos);

    const productosData = [
      {
        data: {
          productos: this.productos
        },
        component: CuatroProductosComponent
      },
      {
        data: {
          productos: this.productos
        },
        component: TresProductosComponent
      }
    ];

    this.generateComponent(0, productosData);
    this.generateComponent(1, productosData);
  }

  obtenerEtiquetas() {
    this.productos.forEach(producto => {
      producto.etiquetas.forEach(etiqueta => {
        if (!this.etiquetas.includes(etiqueta.nombre)) {
          this.etiquetas.push(etiqueta);
        }
      });
    });
  }

  obtenerCategorias() {
    this.productos.forEach(producto => {
      if (!this.categorias.includes(producto.categoria.nombre)) {
        this.categorias.push(producto.categoria.nombre);
      }
    });
  }

  obtenerProductosDeUnaEtiqueta(etiqueta: string): any[] {

    let productosEtiqueta: any[] = [];

    this.productos.forEach(producto => {
      producto.etiquetas.forEach(etiquetaProducto => {
        if (etiquetaProducto.nombre == etiqueta) {
          productosEtiqueta.push(producto);
        }
      });
    });

    return productosEtiqueta;
  }

  generateComponent(componente: number, productosData: any): void {
    const viewContainerRef = this.dynamic.viewContainerRef;
    const componentRef = viewContainerRef.createComponent<ProductosData>(productosData[componente].component);
    componentRef.instance.data = productosData[componente].data.productos;
  }


}


export interface ProductosData {
  data: any
}

