import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponentComponent } from './components/cabecera-component/cabecera-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CabeceraComponentComponent,
    FooterComponentComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductosArtesanales';
}
