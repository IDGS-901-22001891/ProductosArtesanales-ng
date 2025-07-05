import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buscador-component',
  imports: [],
  templateUrl: './buscador-component.component.html',
  styleUrl: './buscador-component.component.css'
})
export class BuscadorComponentComponent {

  // ? Creamos la seccion para los filtros y la busqueda
  @Output() filtrosCambiados = new EventEmitter<string[]>();
  @Output() textoBusquedaCambiado = new EventEmitter<string>();


  filtrosSeleccionados: string[] = [];


  onCheckboxChange(categoria: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.filtrosSeleccionados.push(categoria);
    } else {
      this.filtrosSeleccionados = this.filtrosSeleccionados.filter(c => c !== categoria);
    }
    this.filtrosCambiados.emit(this.filtrosSeleccionados);
  }

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.textoBusquedaCambiado.emit(value);
  }


}
