import { Component } from '@angular/core';
import { Producto } from '../../Interfaces/producto';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { BuscadorComponentComponent } from '../buscador-component/buscador-component.component';

@Component({
  selector: 'app-listado-productos-component',
  standalone: true, // ? Agregamos el decorador de standalone
  imports: [
    CommonModule,
    BuscadorComponentComponent
  ],
  templateUrl: './listado-productos-component.component.html',
  styleUrl: './listado-productos-component.component.css'
})
export class ListadoProductosComponentComponent {

  // ? Creamos un array de productos
  productos: Producto[] = [];

  // ? Creamso un nuevo array para los ffiltros:
  productosFiltrados: Producto[] = [];


  filtrosActivos: string[] = [];
  textoBusqueda: string = '';



  // ? Inyectamos el servicio de productos
  constructor(private productoService: ProductoService) {}

  // ? Método que se ejecuta al iniciar el componente
  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe(
      data => {
        this.productos = data;
        this.productosFiltrados = data;
      },
      error => {
        console.error('Error al obtener productos:', error);
      }
    );
  }


  onFiltrosCambiados(filtros: string[]) {
    this.filtrosActivos = filtros;
    this.filtrarProductos();
  }

  onTextoBusquedaCambiado(texto: string) {
    this.textoBusqueda = texto.toLowerCase();
    this.filtrarProductos();
  }

  filtrarProductos() {
    this.productosFiltrados = this.productos.filter(p => {
      const cumpleFiltroCategoria =
        this.filtrosActivos.length === 0 || this.filtrosActivos.includes(p.categorias);
      const cumpleBusqueda =
        !this.textoBusqueda || p.name.toLowerCase().includes(this.textoBusqueda) || p.description.toLowerCase().includes(this.textoBusqueda);
      return cumpleFiltroCategoria && cumpleBusqueda;
    });
  }
}

