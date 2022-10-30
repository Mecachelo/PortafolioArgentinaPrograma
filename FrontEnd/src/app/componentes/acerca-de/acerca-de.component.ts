import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/modelo/user';
import { TokenService } from 'src/app/servicio/token.service';
import { UserService } from 'src/app/servicio/user.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  user: user = null;

  constructor( private userService: UserService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarUser();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarUser(): void {
    this.userService.detail(1).subscribe(
      data => {this.user=data;}
    )
  }
}
