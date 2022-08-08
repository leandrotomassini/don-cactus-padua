import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/interfaces/interfaces';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  usuario: Usuario;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
  }

  salir() {
    this.usuarioService.logout();
  }

}
