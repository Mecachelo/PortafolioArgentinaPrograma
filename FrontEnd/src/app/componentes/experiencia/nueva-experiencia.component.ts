import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpLaboral } from 'src/app/modelo/exp-laboral';
import { ExpLaboralServiceService } from 'src/app/servicio/exp-laboral-service.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {
  nombreExp : string="";
  descripcionExp : string="";

  constructor(private expLaboralServiceService: ExpLaboralServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experiencia = new ExpLaboral(this.nombreExp, this.descripcionExp);
    this.expLaboralServiceService.save(experiencia).subscribe(data =>{alert("Experiencia añadida");
    this.router.navigate(['']);  
  },err => {
    alert("Fallo");
    this.router.navigate(['']);
  })
  }

}
