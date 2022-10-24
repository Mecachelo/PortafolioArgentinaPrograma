import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/modelo/educacion';
import { EducacionService } from 'src/app/servicio/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {

  nombreEdu : string="";
  descripcionEdu : string="";

  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experiencia = new Educacion(this.nombreEdu, this.descripcionEdu);
    this.educacionService.save(experiencia).subscribe(data =>{alert("Educación añadida");
    this.router.navigate(['']);  
  },err => {
    alert("Fallo");
    this.router.navigate(['']);
  })
  }

}
