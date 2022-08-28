import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../modelo/user.modelo';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = "http://localhost:8080/user/";

  constructor(private http: HttpClient) { }

  public getUser(): Observable<user> {
    return this.http.get<user>(this.URL+ "get/perfil");
  }
}
