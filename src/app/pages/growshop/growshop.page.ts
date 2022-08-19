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

  numeroPar = 0;

  etiquetas: any[] = [];
  categorias: any[] = [];

  textoBuscar: string = '';

  mostrarBuscadorCss: boolean = false;
  mostrarProductosCss: boolean = true;

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

    if (this.numeroPar % 2 == 0) {
      this.obtenerEtiquetas();
      this.obtenerCategorias();
      this.mostrarProductosEtiquetas();
      this.mostrarProductosCategorias();
    }
    this.numeroPar++;
  }

  obtenerEtiquetas() {
    this.etiquetas = [];
    this.productos.forEach(producto => {
      producto.etiquetas.forEach(etiqueta => {

        let existe = false;

        this.etiquetas.forEach(etiquetaGuardada => {
          if (etiqueta.nombre == etiquetaGuardada.nombre) {
            existe = true;
          }
        });

        if (!existe) {
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

  obtenerProductosDeUnaEtiqueta(etiqueta: string, tituloEtiqueta: string): any[] {

    let productosEtiqueta: any[] = [];

    productosEtiqueta.push(tituloEtiqueta);

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

    this.etiquetas.forEach(async etiqueta => {

      let tituloEtiqueta = null;
      await this.productosService.otenerTituloEtiqueta(etiqueta.nombre).then(resp => { tituloEtiqueta = resp; });

      let cantidadProductos = (this.obtenerProductosDeUnaEtiqueta(etiqueta.nombre, '').length) - 1;

      if (cantidadProductos < 1) {

      } else if (cantidadProductos == 1) {
        let productosData = [
          {
            data: {
              productos: this.obtenerProductosDeUnaEtiqueta(etiqueta.nombre, tituloEtiqueta),
            },
            component: UnProductoComponent
          }
        ];

        this.generateComponent(0, productosData);
      } else if (cantidadProductos > 1 && cantidadProductos < 4) {
        let productosData = [
          {
            data: {
              productos: this.obtenerProductosDeUnaEtiqueta(etiqueta.nombre, tituloEtiqueta),
            },
            component: TresProductosComponent
          }
        ];

        this.generateComponent(0, productosData);
      } else if (cantidadProductos > 3 && cantidadProductos < 6) {
        let productosData = [
          {
            data: {
              productos: this.obtenerProductosDeUnaEtiqueta(etiqueta.nombre, tituloEtiqueta),
            },
            component: CuatroProductosComponent
          }
        ];

        this.generateComponent(0, productosData);
      } else {
        let productosData = [
          {
            data: {
              productos: this.obtenerProductosDeUnaEtiqueta(etiqueta.nombre, tituloEtiqueta),
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

      let cantidadProductos = (this.obtenerProductosDeUnaCategoria(categoria, '').length) - 1;

      if (cantidadProductos < 1) {

      } else if (cantidadProductos == 1) {
        let productosData = [
          {
            data: {
              productos: this.obtenerProductosDeUnaCategoria(categoria, `Lo mejor en ${categoria}`)
            },
            component: UnProductoComponent
          }
        ];

        this.generateComponent(0, productosData);
      } else if (cantidadProductos > 1 && cantidadProductos < 4) {
        let productosData = [
          {
            data: {
              productos: this.obtenerProductosDeUnaCategoria(categoria, `Nuestra selección especial en ${categoria}`),
            },
            component: TresProductosComponent
          }
        ];

        this.generateComponent(0, productosData);
      } else if (cantidadProductos > 3 && cantidadProductos < 6) {
        let productosData = [
          {
            data: {
              productos: this.obtenerProductosDeUnaCategoria(categoria, `Destacados en ${categoria}`),
            },
            component: CuatroProductosComponent
          }
        ];

        this.generateComponent(0, productosData);
      } else {
        let productosData = [
          {
            data: {
              productos: this.obtenerProductosDeUnaCategoria(categoria, `Más vendidos en ${categoria}`),
            },
            component: SeisProductosComponent
          }
        ];

        this.generateComponent(0, productosData);
      }

    });
  }


  obtenerProductosDeUnaCategoria(categoria: string = '', titulo: string = ''): any[] {

    let productosTemporales: any[] = [];

    productosTemporales.push(titulo);

    this.productos.forEach(producto => {
      if (producto.categoria.nombre == categoria) {
        productosTemporales.push(producto);
      }
    });

    return productosTemporales;
  }

  buscar(textoBuscar) {

    this.textoBuscar = textoBuscar;

    if (this.textoBuscar != '') {
      this.mostrarBuscadorCss = true;
      this.mostrarProductosCss = false;
    } else {
      this.mostrarBuscadorCss = false;
      this.mostrarProductosCss = true;
    }
  }

}

export interface ProductosData {
  data: any
}

