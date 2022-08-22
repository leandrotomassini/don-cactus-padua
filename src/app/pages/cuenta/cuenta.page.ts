import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Usuario } from 'src/app/interfaces/interfaces';
import { PedidosService } from 'src/app/services/pedidos.service';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit, OnDestroy {

  usuario: Usuario;
  pedidosSubscripcion: Subscription;
  pedidos: any[] = [];

  constructor(private usuarioService: UsuarioService, private pedidosService: PedidosService) { }

  async ngOnInit() {
    this.usuario = this.usuarioService.usuario;

    this.pedidosSubscripcion = await this.pedidosService
      .getPedidos()
      .subscribe((pedidos: any) => {
        pedidos.forEach(pedido => {
          if (pedido.usuario.correo == this.usuario.correo && pedido.aprobado) {
            this.pedidos.push(pedido);
          }
        });
      });
  }

  ngOnDestroy(): void {
    this.pedidosSubscripcion.unsubscribe();
  }

  salir() {
    this.usuarioService.logout();
  }

}
