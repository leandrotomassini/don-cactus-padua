import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;

  constructor(private http: HttpClient, private storage: Storage) { }


  login(correo: string, password: string) {

    const data = { correo, password };

    this.http.post(`${URL}/auth/login`, data)
      .subscribe(resp => {
        console.log(resp);
        if (resp['ok']) {
          this.guardarToken(resp['token']);
        } else {
          this.token = null;
          this.storage.clear();
        }
      })
  }

  async guardarToken(token: string) {
    this.token = token;
    //await this.storage.set('token', token);
  }
}
