import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { PedidosService } from 'src/app/services/pedidos.service';
import { ProductosService } from 'src/app/services/productos.service';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  producto: any = {
    _id: "",
    nombre: "",
    url: "",
    estado: true,
    usuario: {
      _id: "",
      nombre: ""
    },
    precio: 0,
    stock: 0,
    categoria: {
      _id: "",
      nombre: ""
    },
    etiquetas: [
      ""
    ],
    descripcion: "",
    img: [
      ""
    ]
  };

  constructor(private modalCtrl: ModalController, private activateRoute: ActivatedRoute, private productosService: ProductosService, private navCtrl: NavController, private pedidosService: PedidosService) { }


  ngOnInit() {
    this.activateRoute.params.subscribe(async ({ tituloProductoUrl }) => {
      await this.productosService.getProductoSlug(tituloProductoUrl)
        .then(producto => {
          this.producto = producto;
          this.producto = this.producto.producto;
          if (this.producto == undefined) {
            this.navCtrl.navigateRoot('/');
          }
        });
    });
  }

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  salirConArgumentos() {
    this.modalCtrl.dismiss({
      nombre: 'disponible',
      precio: 200
    })
  }

  comprar() {
    this.pedidosService.comprarProductos(this.producto);
  }

}
