import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeletarCarroService {

  private readonly API = "http://localhost:8080/carro"

  constructor( private http: HttpClient) { }

  excluirCarro(id: number): Observable<any>{
    const url = `${this.API}/${id}`
    return this.http.delete<any>(url)
  }

  buscarPorId(id: number){
    const url = `${this.API}/${id}`
    return this.http.get<any>(url)


  }


}
