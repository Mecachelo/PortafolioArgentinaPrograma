import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/modelo/skills';
import { SkillsService } from 'src/app/servicio/skills.service';

@Component({
  selector: 'app-nueva-hardysoft',
  templateUrl: './nueva-hardysoft.component.html',
  styleUrls: ['./nueva-hardysoft.component.css']
})
export class NuevaHardysoftComponent implements OnInit {

  nombre: string;
  porcentaje : number;


  constructor(private skills:SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {

    const skill = new Skills(this.nombre,this.porcentaje);
    this.skills.save(skill).subscribe(data => {
      alert("Skill creada correctamente");
      this.router.navigate(['']);
    },err => {
      alert("Fallo al añadir la skill");
      this.router.navigate(['']);
    })

  }
}
