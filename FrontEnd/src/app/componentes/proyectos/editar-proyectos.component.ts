import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/modelo/proyecto';
import { ImagenService } from 'src/app/servicio/imagen.service';
import { ProyectoService } from 'src/app/servicio/proyecto.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {
  proyecto: Proyecto = null;
  constructor(private proyectoService: ProyectoService, private activatedRoute : ActivatedRoute, private router: Router, public imagenService: ImagenService) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(data => {
      this.proyecto = data;
    }, err => {
      alert("Error al modificar el proyecto");
      this.router.navigate(['']);
    })


  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyecto.imagen = this.imagenService.url;
    
    this.proyectoService.update(id, this.proyecto).subscribe(data => {
      this.router.navigate(['']);

    },err => {
      alert("Error al modificar el proyecto");
      this.router.navigate(['']);
    })
  }

  uploadImage($event:any) {
      const id = this.activatedRoute.snapshot.params['id'];
      const name = "proyecto_"+ id;
      this.imagenService.uploadImage($event, name);

  }

}
