import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateCarroService {

  private readonly API = "http://localhost:8080/carro"

  constructor( private http: HttpClient) { }

      cadastrarCarro(Carro : {nome: String, modelo: String, cor: String}): Observable<any>{
          return this.http.post(this.API, Carro)

}






}
