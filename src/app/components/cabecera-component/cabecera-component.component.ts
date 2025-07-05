import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera-component',
  standalone: true,
  templateUrl: './cabecera-component.component.html',
  styleUrls: ['./cabecera-component.component.css']
})
export class CabeceraComponentComponent {
  constructor(private router: Router) {}

  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }
}
