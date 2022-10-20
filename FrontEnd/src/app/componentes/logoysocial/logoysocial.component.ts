import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-logoysocial',
  templateUrl: './logoysocial.component.html',
  styleUrls: ['./logoysocial.component.css']
})
export class LogoysocialComponent implements OnInit {
  isLogged = false

  constructor(private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged=false;
    }
  }

  onLogout(): void {
    this.tokenService.logout();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }
}
