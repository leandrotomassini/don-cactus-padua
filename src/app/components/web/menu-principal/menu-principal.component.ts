import { Component, OnInit, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss'],
})
export class MenuPrincipalComponent implements OnInit {

  @Output() onBuscar: EventEmitter<string> = new EventEmitter<string>();

  textoBuscar: string = '';

  constructor() { }

  ngOnInit() { }

  async onSearchChange($event) {
    let textoBuscar = $event.detail.value;
    this.onBuscar.emit(textoBuscar);
  }


}
