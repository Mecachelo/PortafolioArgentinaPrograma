import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component'
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion.component';
import { NuevaHardysoftComponent } from './componentes/hardysoft/nueva-hardysoft.component';
import { EditarHardysoftComponent } from './componentes/hardysoft/editar-hardysoft.component';
import { EditarAcercaDeComponent } from './componentes/acerca-de/editar-acerca-de.component';
import { NuevoProyectosComponent } from './componentes/proyectos/nuevo-proyectos.component';
import { EditarProyectosComponent } from './componentes/proyectos/editar-proyectos.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaExp', component: NuevaExperienciaComponent},
  {path: 'editarExp/:id', component: EditarExperienciaComponent},
  {path: 'nuevaEdu', component: NuevaEducacionComponent},
  {path: 'editarEdu/:id', component: EditarEducacionComponent},
  {path: 'nuevaSkill', component: NuevaHardysoftComponent},
  {path: 'editarHys/:id', component: EditarHardysoftComponent},
  {path: 'editarAcerDe/:id', component: EditarAcercaDeComponent},
  {path: 'nuevoPro', component: NuevoProyectosComponent},
  {path: 'editarPro/:id', component: EditarProyectosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
