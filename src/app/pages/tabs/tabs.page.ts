import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  rol: string = '';
  admin: boolean = false;

  constructor(private usuarioService: UsuarioService) {

  }

  async ngOnInit() {

    await this.usuarioService.validaToken();
    this.rol = await this.usuarioService.usuario.rol;

    if (this.rol == 'ADMINISTRADOR') {
      this.admin = true;
    } else {
      this.admin = false;
    }
  }

}
