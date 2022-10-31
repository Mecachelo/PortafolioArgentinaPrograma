import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';

import { HardysoftComponent } from './componentes/hardysoft/hardysoft.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LogoysocialComponent } from './componentes/logoysocial/logoysocial.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { interceptorProvider } from './servicio/interceptor-service';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion.component';
import { NuevaHardysoftComponent } from './componentes/hardysoft/nueva-hardysoft.component';
import { EditarHardysoftComponent } from './componentes/hardysoft/editar-hardysoft.component';
import { EditarAcercaDeComponent } from './componentes/acerca-de/editar-acerca-de.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NuevoProyectosComponent } from './componentes/proyectos/nuevo-proyectos.component';
import { EditarProyectosComponent } from './componentes/proyectos/editar-proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardysoftComponent,
    ProyectosComponent,
    LogoysocialComponent,
    HomeComponent,
    LoginComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    NuevaEducacionComponent,
    EditarEducacionComponent,
    NuevaHardysoftComponent,
    EditarHardysoftComponent,
    EditarAcercaDeComponent,
    NuevoProyectosComponent,
    EditarProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
