import { Component } from '@angular/core';
import { Producto } from '../../Interfaces/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-listado-productos-component',
  imports: [],
  templateUrl: './listado-productos-component.component.html',
  styleUrl: './listado-productos-component.component.css'
})
export class ListadoProductosComponentComponent {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

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

