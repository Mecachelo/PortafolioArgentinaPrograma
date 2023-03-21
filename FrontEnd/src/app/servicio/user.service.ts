import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../modelo/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //URL = "http://localhost:8080/user";
  URL = "https://spotty-marylinda-mecachelo.koyeb.app/user";

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<user[]>{
    return this.httpClient.get<user[]>(this.URL + '/lista');

  }

  public detail(id:number):Observable<user>{
    return this.httpClient.get<user>(this.URL+ `/detail/${id}`)
  }

  /*public save(user:user):Observable<any>{
    return this.httpClient.post<any>(this.URL+ `/create`, user);
  }*/

  public update(id:number, user:user):Observable<any>{
    return this.httpClient.put<any>(this.URL+ `/update/${id}`, user);
  }

  /*public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.URL+ `/delete/${id}`);
  }*/

  
}
