import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/modelo/user';
import { ImagenService } from 'src/app/servicio/imagen.service';
import { UserService } from 'src/app/servicio/user.service';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit {
  user: user = null;
  constructor(private userService: UserService, private activatedRoute : ActivatedRoute, private router: Router, public imagenService: ImagenService) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['id'];
    this.userService.detail(id).subscribe(data => {
      this.user = data;
    }, err => {
      alert("Error al modificar la persona");
      this.router.navigate(['']);
    })


  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.user.imagen = this.imagenService.url;
    this.userService.update(id, this.user).subscribe(data => {
      this.router.navigate(['']);

    },err => {
      alert("Error al modificar la Persona");
      this.router.navigate(['']);
    })
  }

  uploadImage($event:any) {
      const id = this.activatedRoute.snapshot.params['id'];
      const name = "perfil_"+ id;
      this.imagenService.uploadImage($event, name);

  }

}
