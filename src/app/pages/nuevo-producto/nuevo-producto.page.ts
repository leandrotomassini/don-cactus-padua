import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Editor, Validators } from 'ngx-editor';

import { CategoriasService } from 'src/app/services/categorias.service';
import { EtiquetasService } from 'src/app/services/etiquetas.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.page.html',
  styleUrls: ['./nuevo-producto.page.scss'],
})
export class NuevoProductoPage implements OnInit, OnDestroy {

  categorias: any;
  etiquetas: any;
  fotos: string[] = [];
  producto: any;

  editor: Editor;
  html: '';


  nuevoProductoFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    precio: [0, [Validators.required, Validators.minLength(8)]],
    stock: [0, [Validators.required, Validators.minLength(3)]],
    img: ['', [Validators.required, Validators.minLength(3)]],
    descripcion: ['', [Validators.required, Validators.minLength(3)]],
    categoria: [''],
    etiquetas: [''],
  });

  constructor(public modalController: ModalController,
    private fb: FormBuilder, private categoriasService: CategoriasService, private etiquetasService: EtiquetasService, private productosService: ProductosService) { }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  ngOnInit() {
    this.cargarCategorias();
    this.cargarEtiquetas();
    this.editor = new Editor();
  }

  campoEsValido(campo: string) {
    return this.nuevoProductoFormulario.controls[campo].errors && this.nuevoProductoFormulario.controls[campo].touched;
  }

  guardarProducto() {
    this.producto = this.nuevoProductoFormulario.value;
    this.producto.img = this.fotos;
    console.log(this.producto);
    this.productosService.guardarProducto(this.producto).then(console.log).catch(console.log);
  }

  cargarCategorias() {
    this.categoriasService.obtenerCategorias().then(categorias => this.categorias = categorias);
  }

  cargarEtiquetas() {
    this.etiquetasService.obtenerEtiquetas().then(etiquetas => this.etiquetas = etiquetas);
  }

  guardarFoto() {

    let existe = false;

    this.fotos.forEach(fotoGuardada => {
      if (fotoGuardada == this.nuevoProductoFormulario.value.img) {
        existe = true;
      }
    });

    if (!existe) {
      this.fotos.push(this.nuevoProductoFormulario.value.img);
    }

  }

  borrarFoto(indice: number) {
    this.fotos.splice(indice, 1);
  }

}
