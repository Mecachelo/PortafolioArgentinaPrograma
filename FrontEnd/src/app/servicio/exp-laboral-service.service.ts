import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpLaboral } from '../modelo/exp-laboral';

@Injectable({
  providedIn: 'root'
})
export class ExpLaboralServiceService {
  
  //expURL = 'http://localhost:8080/expLaboral'
  expURL = 'Access-Control-Allow-Origin:https://spotty-marylinda-mecachelo.koyeb.app/expLaboral'

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<ExpLaboral[]>{
    return this.httpClient.get<ExpLaboral[]>(this.expURL + '/lista');

  }

  public detail(id:number):Observable<ExpLaboral>{
    return this.httpClient.get<ExpLaboral>(this.expURL+ `/detail/${id}`)
  }

  public save(expLaboral:ExpLaboral):Observable<any>{
    return this.httpClient.post<any>(this.expURL+ `/create`, expLaboral);
  }

  public update(id:number, expLaboral:ExpLaboral):Observable<any>{
    return this.httpClient.put<any>(this.expURL+ `/update/${id}`, expLaboral);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.expURL+ `/delete/${id}`);
  }
}
