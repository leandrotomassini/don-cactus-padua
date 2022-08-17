import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { EditarEtiquetaPage } from 'src/app/pages/editar-etiqueta/editar-etiqueta.page';
import { NuevaEtiquetaPage } from 'src/app/pages/nueva-etiqueta/nueva-etiqueta.page';
import { EtiquetasService } from 'src/app/services/etiquetas.service';

@Component({
  selector: 'app-tabla-etiquetas',
  templateUrl: './tabla-etiquetas.component.html',
  styleUrls: ['./tabla-etiquetas.component.scss'],
})
export class TablaEtiquetasComponent implements OnInit, OnDestroy {

  etiquetas: any;
  etiquetasSubscripcion: Subscription;
  textoBuscar: string = '';

  constructor(private etiquetasService: EtiquetasService, private modalController: ModalController) { }

  ngOnInit() {
    this.etiquetasSubscripcion = this.etiquetasService.getEtiquetas().subscribe(etiquetas => {
      this.etiquetas = etiquetas;
    });

    this.etiquetasSubscripcion = this.etiquetasService.getEtiquetasBorradas().subscribe(etiquetas => {
      this.etiquetas = etiquetas;
    });
  }

  ngOnDestroy(): void {
    this.etiquetasSubscripcion.unsubscribe();
  }

  onSearchChange($event) {
    this.textoBuscar = $event.detail.value;
  }

  async agregarEtiqueta() {

    const modal = await this.modalController.create({
      component: NuevaEtiquetaPage
    });

    await modal.present();
  }

  async editarEtiqueta(etiquetaEditar) {

    const modal = await this.modalController.create({
      component: EditarEtiquetaPage,
      componentProps: {
        etiquetaEditar
      }
    });

    await modal.present();
  }

  borrarEtiqueta(idEtiqueta: string) {
    this.etiquetasService.borrarEtiqueta(idEtiqueta).then().catch();
  }


  segmentChanged($event) {

   
    if ($event.detail.value == 'activas') {
      this.etiquetasService.getEtiquetas();
    }

    if ($event.detail.value == 'borradas') {
      this.etiquetasService.getEtiquetasBorradas();
    }
  }

}
