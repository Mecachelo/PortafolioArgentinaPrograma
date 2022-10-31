import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/modelo/proyecto';
import { ImagenService } from 'src/app/servicio/imagen.service';
import { ProyectoService } from 'src/app/servicio/proyecto.service';

@Component({
  selector: 'app-nuevo-proyectos',
  templateUrl: './nuevo-proyectos.component.html',
  styleUrls: ['./nuevo-proyectos.component.css']
})
export class NuevoProyectosComponent implements OnInit {

  nombre : string="";
  fecha : string="";
  descripcion : string="";
  imagen : string="";

  constructor(private educacionService: ProyectoService, private router: Router, private activatedRoute : ActivatedRoute, public imagenService: ImagenService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.nombre,this.fecha, this.descripcion, this.imagen);
    this.educacionService.save(proyecto).subscribe(data =>{alert("Proyecto añadido");
    this.router.navigate(['']);  
  },err => {
    alert("Fallo");
    this.router.navigate(['']);
  })
  }

  uploadImage($event:any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "proyecto_"+ id;
    this.imagenService.uploadImage($event, name);

}

}
