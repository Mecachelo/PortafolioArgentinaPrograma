import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpLaboral } from 'src/app/modelo/exp-laboral';
import { ExpLaboralServiceService } from 'src/app/servicio/exp-laboral-service.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  expLaboral: ExpLaboral = null;

  constructor(private expLaboralServiceService: ExpLaboralServiceService, private activatedRoute : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expLaboralServiceService.detail(id).subscribe(data => {
      this.expLaboral = data;
    }, err => {
      alert("Error al modificar la experiencia");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expLaboralServiceService.update(id, this.expLaboral).subscribe(data => {
      this.router.navigate(['']);

    },err => {
      alert("Error al modificar la experiencia");
      this.router.navigate(['']);
    })
  }

}
