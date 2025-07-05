import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponentComponent } from './components/cabecera-component/cabecera-component.component';
import { InicioComponentComponent } from './components/inicio-component/inicio-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { ListadoProductosComponentComponent } from "./components/listado-productos-component/listado-productos-component.component";
import { BuscadorComponentComponent } from "./components/buscador-component/buscador-component.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CabeceraComponentComponent,
    // InicioComponentComponent,
    FooterComponentComponent,
    ListadoProductosComponentComponent,
    BuscadorComponentComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'ProductosArtesanales';
}
