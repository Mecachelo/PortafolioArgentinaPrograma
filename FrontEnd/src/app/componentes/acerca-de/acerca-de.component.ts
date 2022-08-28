import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/modelo/user.modelo';
import { UserService } from 'src/app/servicio/user.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  user: user = new user("","","");

  constructor( public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {this.user = data})
  }

}
