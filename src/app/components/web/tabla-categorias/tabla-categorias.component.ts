import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { EditarCategoriaPage } from 'src/app/pages/editar-categoria/editar-categoria.page';
import { NuevaCategoriaPage } from 'src/app/pages/nueva-categoria/nueva-categoria.page';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-tabla-categorias',
  templateUrl: './tabla-categorias.component.html',
  styleUrls: ['./tabla-categorias.component.scss'],
})
export class TablaCategoriasComponent implements OnInit, OnDestroy {
  categorias: any;
  categoriasSubscripcion: Subscription;
  textoBuscar: string = '';

  constructor(private categoriasService: CategoriasService, private modalController: ModalController) { }

  ngOnInit() {
    this.categoriasSubscripcion = this.categoriasService.getCategorias().subscribe(categorias => {
      this.categorias = categorias;
    });

    this.categoriasSubscripcion = this.categoriasService.getCategoriasBorradas().subscribe(categorias => {
      this.categorias = categorias;
    });
  }

  ngOnDestroy(): void {
    this.categoriasSubscripcion.unsubscribe();
  }

  onSearchChange($event) {
    this.textoBuscar = $event.detail.value;
  }

  async agregarCategoria() {

    const modal = await this.modalController.create({
      component: NuevaCategoriaPage
    });

    await modal.present();
  }

  async editarCategoria(categoriaEditar) {

    const modal = await this.modalController.create({
      component: EditarCategoriaPage,
      componentProps: {
        categoriaEditar
      }
    });

    await modal.present();
  }

  borrarCategoria(idCategoria: string) {
    this.categoriasService.borrarCategoria(idCategoria).then().catch();
  }


  segmentChanged($event) {

    if ($event.detail.value == 'activas') {
      this.categoriasService.getCategorias();
    }

    if ($event.detail.value == 'borradas') {
      this.categoriasService.getCategoriasBorradas();
    }
  }
}
