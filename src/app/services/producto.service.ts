import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../Interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'https://localhost:7224/api/Productos/Listar';

  // ? Llamamos al objeto en específico para poder trabajar con peticiones
  constructor(private http: HttpClient) {}


  // * Método para poder traernos los elementos de la API
  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}
