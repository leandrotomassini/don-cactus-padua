import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  rol: string = '';

  constructor(private usuarioService: UsuarioService) {
    this.rol = this.usuarioService.usuario.rol;
  }

}
