import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { EtiquetasService } from 'src/app/services/etiquetas.service';

@Component({
  selector: 'app-nueva-etiqueta',
  templateUrl: './nueva-etiqueta.page.html',
  styleUrls: ['./nueva-etiqueta.page.scss'],
})
export class NuevaEtiquetaPage implements OnInit {

  etiqueta: any;

  nuevaEtiquetaFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    titulo: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(private fb: FormBuilder, private etiquetaService: EtiquetasService, private modalControler: ModalController) { }

  ngOnInit() {
  }

  guardarEtiqueta() {
    this.etiqueta = this.nuevaEtiquetaFormulario.value;
    this.etiquetaService.crearEtiqueta(this.etiqueta).then(console.log).catch(console.log);
    this.modalControler.dismiss();
  }

  campoEsValido(campo: string) {
    return this.nuevaEtiquetaFormulario.controls[campo].errors && this.nuevaEtiquetaFormulario.controls[campo].touched;
  }



}
