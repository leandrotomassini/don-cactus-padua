import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Editor, Validators } from 'ngx-editor';
import { CategoriasService } from 'src/app/services/categorias.service';
import { EtiquetasService } from 'src/app/services/etiquetas.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.page.html',
  styleUrls: ['./editar-producto.page.scss'],
})
export class EditarProductoPage implements OnInit, OnDestroy {
  @Input() productoEditar: any;
  fotoInput: string = '';

  categorias: any;
  etiquetas: any;
  fotos: string[] = [];
  producto: any;

  editor: Editor;
  html: '';


  editarProductoFormulario: FormGroup = this.fb.group({
    _id: [''],
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    precio: ['', [Validators.required, Validators.minLength(8)]],
    stock: ['', [Validators.required, Validators.minLength(3)]],
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
    this.fotos = this.productoEditar.img;

    this.editarProductoFormulario.reset({
      nombre: this.productoEditar.nombre,
      precio: this.productoEditar.precio,
      stock: this.productoEditar.stock,
      img: '',
      descripcion: this.productoEditar.descripcion,
      categoria: this.productoEditar.categoria,
      etiquetas: this.productoEditar.etiquetas,
    });
  }

  campoEsValido(campo: string) {
    return this.editarProductoFormulario.controls[campo].errors && this.editarProductoFormulario.controls[campo].touched;
  }

  guardarProducto() {
    this.editarProductoFormulario.value._id = this.productoEditar._id;
    this.producto = this.editarProductoFormulario.value;
    this.producto.img = this.fotos;
    this.productosService.editarProducto(this.producto).then().catch();
    this.modalController.dismiss();
  }

  async cargarCategorias() {
    this.categoriasService.obtenerCategorias().then(categorias => this.categorias = categorias);
  }

  async cargarEtiquetas() {
    this.etiquetasService.obtenerEtiquetas().then(etiquetas => this.etiquetas = etiquetas);
  }

  guardarFoto() {

    let existe = false;

    this.fotos.forEach(fotoGuardada => {
      if (fotoGuardada == this.editarProductoFormulario.value.img) {
        existe = true;
      }
    });

    if (!existe) {
      this.fotos.push(this.editarProductoFormulario.value.img);
    }

    this.fotoInput = '';
  }

  borrarFoto(indice: number) {
    this.fotos.splice(indice, 1);
  }

  salir() {
    this.modalController.dismiss();
  }
}
