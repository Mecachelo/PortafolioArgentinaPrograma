import { Component, OnInit } from '@angular/core';
import { ExpLaboral } from 'src/app/modelo/exp-laboral';
import { ExpLaboralServiceService } from 'src/app/servicio/exp-laboral-service.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: ExpLaboral[]=[];

  constructor(private ExpLaboralServiceService: ExpLaboralServiceService, private tokenService: TokenService) { }

  isLogged= false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.ExpLaboralServiceService.lista().subscribe(
      data => {this.experiencia=data;}
    )
  }
  delete(id?: number){
    if(id != undefined){
      this.ExpLaboralServiceService.delete(id).subscribe(data =>{
        this.cargarExperiencia();
      },err => {
        alert("No se pudo borrar la experiencia");
      })
    }
  }

}


