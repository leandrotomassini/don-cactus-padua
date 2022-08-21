import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-controlpedidos',
  templateUrl: './controlpedidos.page.html',
  styleUrls: ['./controlpedidos.page.scss'],
})
export class ControlpedidosPage implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((parametros) => {
      console.log(parametros);
    });
  }

}
