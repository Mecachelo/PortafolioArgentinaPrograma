import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component'
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaExp', component: NuevaExperienciaComponent},
  {path: 'editarExp/:id', component: EditarExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
