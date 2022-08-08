import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { tap } from 'rxjs/operators';


import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Usuario } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = 'null';
  usuario: any = {};

  constructor(private http: HttpClient, private storage: Storage, private navCtrl: NavController) {
    this.storage.create();
  }


  login(correo: string, password: string) {

    const data = { correo, password };

    return new Promise((resolve) => {
      this.http.post(`${URL}/auth/login`, data)
        .subscribe(async resp => {
          if (resp['ok']) {
            await this.guardarToken(resp['token']);
            resolve(true);
          } else {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }
        }, (err) => {
          this.token = null;
          this.storage.clear();
          resolve(false);
        });
    });
  }

  async guardarToken(token: string) {
    this.token = token;
    await this.storage.set('token', token);
  }

  registro(usuario: Usuario) {
    return new Promise(resolve => {
      console.log(usuario);
      this.http.post(`${URL}/usuarios`, usuario)
        .subscribe(async resp => {
          if (resp['ok']) {
            await this.guardarToken(resp['token']);
            resolve(true);
          } else {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }
        }, (err) => {
          this.token = null;
          this.storage.clear();
          resolve(false);
        });
    });
  }

  async cargarToken() {
    this.token = await this.storage.get('token') || null;
  }

  async validaToken(): Promise<boolean> {

    await this.cargarToken();

    if (!this.token) {
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }

    return new Promise<boolean>(resolve => {

      const headers = new HttpHeaders({
        'x-token': this.token
      });

      this.http.get(`${URL}/auth`, { headers })
        .subscribe(resp => {
          if (resp['ok']) {
            this.usuario = resp['usuario'];
            resolve(true);
          } else {
            this.navCtrl.navigateRoot('/login');
            resolve(false);
          }
        });

    });
  }

  loginGoogle(id_token: string) {
    return this.http.post(`${URL}/auth/google`, { id_token })
      .pipe(
        tap(async (resp: any) => {
          await this.guardarToken(resp.token);
          this.navCtrl.navigateRoot('/cuenta');
        })
      )
  }

  logout() {
    this.usuario = null;
    this.token = null;
    this.storage.clear();
    this.navCtrl.navigateRoot('/login');
  }
}
