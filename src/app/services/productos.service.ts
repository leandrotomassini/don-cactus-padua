import { Injectable, OnInit } from '@angular/core';

import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService implements OnInit{

  constructor(private wsService: WebsocketService) { }

  ngOnInit() {
  }
  
  getProductos(){
    this.wsService.emit('get-productos');
    return this.wsService.listen('productos');
  }


 

  
}
