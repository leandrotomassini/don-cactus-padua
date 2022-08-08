import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPipe'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string, columna: string = "nombre"): any[] {

    if (texto === '') {
      return arreglo;
    }

    if (!arreglo) {
      return arreglo;
    }

    texto = texto.toLocaleLowerCase();

    return arreglo.filter(
      item => item[columna].toLocaleLowerCase().includes(texto)
    )

  }

}
