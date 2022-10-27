import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/modelo/skills';
import { SkillsService } from 'src/app/servicio/skills.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-hardysoft',
  templateUrl: './hardysoft.component.html',
  styleUrls: ['./hardysoft.component.css']
})
export class HardysoftComponent implements OnInit {

  skill: Skills[]= [];

  constructor(private skillService: SkillsService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarSkills():void{
    this.skillService.lista().subscribe(data=>{
      this.skill = data;
    })
  }

  delete(id:number) {
    if(id != undefined){
      this.skillService.delete(id).subscribe(data=>{
        this.cargarSkills();
      },err => {
        alert("No se pudo borrar la skill")
      })
    }
  }

}
