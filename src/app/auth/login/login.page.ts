import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides } from '@ionic/angular';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', { static: false }) slides: IonSlides;

  avatars = [
    {
      img: 'https://i.imgur.com/l4L4idL.png',
      seleccionado: true
    },
    {
      img: 'https://i.imgur.com/C6CAIzk.gif',
      seleccionado: false
    },
    {
      img: 'https://i.imgur.com/85h8DWp.jpeg',
      seleccionado: false
    },
    {
      img: 'https://i.imgur.com/85h8DWp.jpeg',
      seleccionado: false
    },
    {
      img: 'https://i.imgur.com/85h8DWp.jpeg',
      seleccionado: false
    },
    {
      img: 'https://i.imgur.com/85h8DWp.jpeg',
      seleccionado: false
    },
    {
      img: 'https://i.imgur.com/85h8DWp.jpeg',
      seleccionado: false
    },
    {
      img: 'https://i.imgur.com/85h8DWp.jpeg',
      seleccionado: false
    },
  ];

  avatarSlide = {
    slidesPerView: 3.5
  };

  loginUser = {
    email: 'pedro@test.com',
    password: '123456'
  }

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.slides.lockSwipes(true);
  }

  login(fLogin: NgForm) {

    if (fLogin.invalid) { return; }

    this.usuarioService.login(this.loginUser.email, this.loginUser.password);

  }

  registro(fRegistro: NgForm) {
    console.log(fRegistro.valid)
  }

  seleccionarAvatar(avatar) {
    this.avatars.forEach(av => av.seleccionado = false);
    avatar.seleccionado = true;
  }

  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

}
