import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://backendcozzo.herokuapp.com/personas'; /*esta URL es la genérica. Luego le concatenaremos mediante metodos, los crear, editar,borrar ,etc */


  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona> { /*Angular usa "Observable" para realizar todas las peticiones asíncronas */
    return this.http.get<persona>(this.URL+'/traer/perfil');
  }
}
