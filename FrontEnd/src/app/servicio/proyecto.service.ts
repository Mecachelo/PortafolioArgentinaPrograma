import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../modelo/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  //proURL = 'http://localhost:8080/proyectos'
  proURL = 'https://portfoliomembackend.onrender.com/proyectos'
  
  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.proURL + '/lista');

  }

  public detail(id:number):Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.proURL+ `/detail/${id}`)
  }

  public save(proyecto:Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.proURL+ `/create`, proyecto);
  }

  public update(id:number, proyecto:Proyecto):Observable<any>{
    return this.httpClient.put<any>(this.proURL+ `/update/${id}`, proyecto);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.proURL+ `/delete/${id}`);
  }
}
