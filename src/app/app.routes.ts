import { Routes } from '@angular/router';
import { InicioComponentComponent } from './components/inicio-component/inicio-component.component';
import { ListadoProductosComponentComponent } from './components/listado-productos-component/listado-productos-component.component';

export const routes: Routes = [
  { path: '', component: InicioComponentComponent },
  { path: 'productos', component: ListadoProductosComponentComponent },
  { path: '**', redirectTo: '' }
];


// @NgModule({
//   imports: [Ini.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}
