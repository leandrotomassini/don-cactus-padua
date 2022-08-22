import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

import { Usuario } from 'src/app/interfaces/interfaces';
import { UiServiceService } from 'src/app/services/ui-service.service';

import { UsuarioService } from 'src/app/services/usuario.service';

declare const google: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit {

  @ViewChild('googleBtn') googleBtn: ElementRef;

  loginUser = {
    email: 'pedro@test.com',
    password: '123456'
  }

  registerUser: Usuario = {
    nombre: 'Test 1',
    google: false,
    correo: 'test@test.com',
    password: '123456',
    rol: 'CLIENTE',
    img: ''
  }

  constructor(private usuarioService: UsuarioService, private navCtrl: NavController, private uiService: UiServiceService) { }

  ngAfterViewInit() {
    this.googleInit();
  }

  googleInit() {

    google.accounts.id.initialize({
      client_id: "849386631100-90gnjsrcclc99emafpvtvd781qb6m5c8.apps.googleusercontent.com",
      callback: response => this.handleCredentialResponse(response)
    });

    google.accounts.id.renderButton(
      this.googleBtn.nativeElement,
      { theme: "outline", size: "large" }  // customization attributes
    );

  }

  handleCredentialResponse(response: any) {
    this.usuarioService.loginGoogle(response.credential).subscribe(resp => {
      //console.log({ login: resp });
    });
    //console.log("Encoded JWT ID To`ken: " + response.credential);
  }

  ngOnInit() {
  }


  async login(fLogin: NgForm) {

    if (fLogin.invalid) { return; }

    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password);

    if (valido) {
      this.navCtrl.navigateRoot('/cuenta', { animated: true });
    } else {
      this.uiService.alertaInformativa('Usuario o contraseña no son correctos.');
    }


  }

  async registro(fRegistro: NgForm) {

    if (fRegistro.invalid) {
      return;
    }

    const valido = await this.usuarioService.registro(this.registerUser);

    if (valido) {
      this.navCtrl.navigateRoot('/cuenta', { animated: true });
    } else {
      this.uiService.alertaInformativa('Ese correo electrónico ya esta registrado.');
    }

  }


}
