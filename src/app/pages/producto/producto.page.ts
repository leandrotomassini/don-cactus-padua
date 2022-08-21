import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { PedidosService } from 'src/app/services/pedidos.service';
import { ProductosService } from 'src/app/services/productos.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Storage } from '@ionic/storage-angular';
import { CarritoService } from 'src/app/services/carrito.service';



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

  constructor(private modalCtrl: ModalController, private activateRoute: ActivatedRoute, private productosService: ProductosService, private navCtrl: NavController, private pedidosService: PedidosService, private usuarioService: UsuarioService, private storage: Storage, private carritoService: CarritoService) {
    this.storage.create();
  }


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

  async comprar() {

    await this.usuarioService.cargarToken();
    await this.usuarioService.validaToken();

    if (this.usuarioService.usuario.nombre == undefined) {
      await this.storage.set('url', this.producto.url);
      this.navCtrl.navigateRoot('/login');
    } else {
      await this.carritoService.agregarProductoCarrito(this.producto._id).then(resp => {
        this.navCtrl.navigateRoot('/carrito');
      }).catch();
    }

  }

}
