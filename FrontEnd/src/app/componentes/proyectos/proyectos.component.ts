import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/modelo/proyecto';
import { ProyectoService } from 'src/app/servicio/proyecto.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto: Proyecto[]=[];

  constructor(private ProyectoService: ProyectoService, private tokenService: TokenService) { }

  isLogged= false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.ProyectoService.lista().subscribe(
      data => {this.proyecto=data;}
    )
  }
  delete(id?: number){
    if(id != undefined){
      this.ProyectoService.delete(id).subscribe(data =>{
        this.cargarProyecto();
      },err => {
        alert("No se pudo borrar el proyecto");
      })
    }
  }

}
