import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Validators } from 'ngx-editor';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-nueva-categoria',
  templateUrl: './nueva-categoria.page.html',
  styleUrls: ['./nueva-categoria.page.scss'],
})
export class NuevaCategoriaPage implements OnInit {

  categoria: any;

  nuevaCategoriaFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    img: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(private fb: FormBuilder, private categoriaService: CategoriasService, private modalControler: ModalController) { }

  ngOnInit() {
  }

  guardarCategoria() {
    this.categoria = this.nuevaCategoriaFormulario.value;
    this.categoriaService.crearCategoria(this.categoria);
    this.modalControler.dismiss();
  }

  campoEsValido(campo: string) {
    return this.nuevaCategoriaFormulario.controls[campo].errors && this.nuevaCategoriaFormulario.controls[campo].touched;
  }


}
