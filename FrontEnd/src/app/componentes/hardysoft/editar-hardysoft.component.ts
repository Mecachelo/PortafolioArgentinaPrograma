import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/modelo/skills';
import { SkillsService } from 'src/app/servicio/skills.service';

@Component({
  selector: 'app-editar-hardysoft',
  templateUrl: './editar-hardysoft.component.html',
  styleUrls: ['./editar-hardysoft.component.css']
})
export class EditarHardysoftComponent implements OnInit {

  skill: Skills = null;

  constructor(private skillService: SkillsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.detail(id).subscribe(data => {
      this.skill = data;
    },err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    })
  }

  onUpdate(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.update(id, this.skill).subscribe(data => {
      this.router.navigate(['']);
    },err => {
      alert("Error al modificar la skill");
      this.router.navigate(['']);
    })
  }

}
