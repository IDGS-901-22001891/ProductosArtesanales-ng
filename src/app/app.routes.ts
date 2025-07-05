import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponentComponent } from './components/inicio-component/inicio-component.component';

const routes: Routes = [
  { path: '', component: InicioComponentComponent },
  { path: 'productos', component: InicioComponentComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
