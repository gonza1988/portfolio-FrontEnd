import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = environment.URL + 'personas/'; /*esta URL es la genérica. Luego le concatenaremos mediante metodos, los crear, editar,borrar ,etc */


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<persona[]> {

    return this.httpClient.get<persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<persona> {

    return this.httpClient.get<persona>(this.URL + `detail/${id}`);
  }

  public save(Persona: persona): Observable<any> {

    return this.httpClient.post<any>(this.URL + 'create', Persona);
  }

  public update(id: number, Persona: persona): Observable<any> {

    return this.httpClient.put<any>(this.URL + `update/${id}`, Persona);
  }

 /*public delete(id: number): Observable<any> {

    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }*/
}
