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



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaExp', component: NuevaExperienciaComponent},
  {path: 'editarExp/:id', component: EditarExperienciaComponent},
  {path: 'nuevaEdu', component: NuevaEducacionComponent},
  {path: 'editarEdu/:id', component: EditarEducacionComponent},
  {path: 'nuevaSkill', component: NuevaHardysoftComponent},
  {path: 'editarHys/:id', component: EditarHardysoftComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
