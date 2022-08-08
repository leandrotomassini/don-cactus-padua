import { Component, OnInit } from '@angular/core';

import { WebsocketService } from './services/websocket.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  estado: boolean = false;

  constructor(private wsService: WebsocketService) {}

  ngOnInit(): void {
  }


}
