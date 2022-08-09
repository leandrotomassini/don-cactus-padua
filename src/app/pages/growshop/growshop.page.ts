import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CuatroProductosComponent } from 'src/app/components/publicaciones/cuatro-productos/cuatro-productos.component';
import { SeisProductosComponent } from 'src/app/components/publicaciones/seis-productos/seis-productos.component';
import { TresProductosComponent } from 'src/app/components/publicaciones/tres-productos/tres-productos.component';
import { UnProductoComponent } from 'src/app/components/publicaciones/un-producto/un-producto.component';

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
    // this.mostrarProductosEtiquetas();
    this.mostrarProductosCategorias();
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

  mostrarProductosEtiquetas() {

    this.etiquetas.forEach(etiqueta => {

      let cantidadProductos = this.obtenerProductosDeUnaEtiqueta(etiqueta.nombre).length;
      if (cantidadProductos < 1) {

      } else if (cantidadProductos == 1) {
        let productosData = [
          {
            data: {
              productos: this.obtenerProductosDeUnaEtiqueta(etiqueta.nombre),
              titulo: etiqueta.nombre
            },
            component: UnProductoComponent
          }
        ];

        this.generateComponent(0, productosData);
      } else if (cantidadProductos > 1 && cantidadProductos < 4) {
        let productosData = [
          {
            data: {
              productos: this.obtenerProductosDeUnaEtiqueta(etiqueta.nombre),
              titulo: etiqueta.nombre
            },
            component: TresProductosComponent
          }
        ];

        this.generateComponent(0, productosData);
      } else if (cantidadProductos > 3 && cantidadProductos < 6) {
        let productosData = [
          {
            data: {
              productos: this.obtenerProductosDeUnaEtiqueta(etiqueta.nombre),
              titulo: etiqueta.nombre
            },
            component: CuatroProductosComponent
          }
        ];

        this.generateComponent(0, productosData);
      } else {
        let productosData = [
          {
            data: {
              productos: this.obtenerProductosDeUnaEtiqueta(etiqueta.nombre),
              titulo: etiqueta.nombre
            },
            component: SeisProductosComponent
          }
        ];

        this.generateComponent(0, productosData);
      }

    });
  }

  mostrarProductosCategorias() {


    this.categorias.forEach(categoria => {

      let cantidadProductos = this.obtenerProductosDeUnaCategoria(categoria).length;

      if (cantidadProductos < 1) {

      } else if (cantidadProductos == 1) {
        let productosData = [
          {
            data: {
              titulo: 'Destacados en ',
              productos: this.obtenerProductosDeUnaCategoria(categoria)
            },
            component: UnProductoComponent
          }
        ];
        let productosDataJson = JSON.stringify(productosData);
        this.generateComponent(0, productosDataJson);
      } else if (cantidadProductos > 1 && cantidadProductos < 4) {
        let productosData = [
          {
            data: {
              titulo: 'Destacados en ',
              productos: this.obtenerProductosDeUnaCategoria(categoria)
            },
            component: TresProductosComponent
          }
        ];

        let productosDataJson = JSON.stringify(productosData);
        this.generateComponent(0, productosDataJson);
      } else if (cantidadProductos > 3 && cantidadProductos < 6) {
        let productosData = [
          {
            data: {
              titulo: 'Destacados en ',
              productos: this.obtenerProductosDeUnaCategoria(categoria),
            },
            component: CuatroProductosComponent
          }
        ];

        let productosDataJson = JSON.stringify(productosData);
        this.generateComponent(0, productosDataJson);
      } else {
        let productosData = [
          {
            data: {
              titulo: 'Destacados en ',
              productos: this.obtenerProductosDeUnaCategoria(categoria),
            },
            component: SeisProductosComponent
          }
        ];

        console.log(productosData)
        this.generateComponent(0, productosData);
      }

    });
  }


  obtenerProductosDeUnaCategoria(categoria: string = ''): any[] {

    let productosTemporales: any[] = [];

    this.productos.forEach(producto => {
      if (producto.categoria.nombre == categoria) {
        productosTemporales.push(producto);
      }
    });

    return productosTemporales;
  }

}

export interface ProductosData {
  data: any
}

