import { Component } from '@angular/core';
import { Producto } from '../../Interfaces/producto';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-productos-component',
  standalone: true, // ? Agregamos el decorador de standalone
  imports: [CommonModule],
  templateUrl: './listado-productos-component.component.html',
  styleUrl: './listado-productos-component.component.css'
})
export class ListadoProductosComponentComponent {

  // ? Creamos un array de productos
  productos: Producto[] = [];

  // ? Inyectamos el servicio de productos
  constructor(private productoService: ProductoService) {}

  // ? Método que se ejecuta al iniciar el componente
  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe(
      data => {
        this.productos = data;
      },
      error => {
        console.error('Error al obtener productos:', error);
      }
    );
  }


}

