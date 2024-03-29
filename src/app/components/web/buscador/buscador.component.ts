import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
})
export class BuscadorComponent implements OnInit {

  @Input() textoBuscar: string = '';
  productosSubscripcion: Subscription;
  productos: any;

  constructor(private productosService: ProductosService, private navCtrl: NavController) { }

  async ngOnInit() {
    this.productosSubscripcion = await this.productosService
      .getProductos()
      .subscribe(productos => {
        this.productos = productos;
      });
  }

  verProducto(urlProducto) {
    let url = '/' + urlProducto;
    this.navCtrl.navigateRoot(url);
  }
}
