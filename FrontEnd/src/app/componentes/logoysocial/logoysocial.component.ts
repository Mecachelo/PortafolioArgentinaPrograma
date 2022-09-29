import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoysocial',
  templateUrl: './logoysocial.component.html',
  styleUrls: ['./logoysocial.component.css']
})
export class LogoysocialComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login'])
  }
}
