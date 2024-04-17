import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from 'src/app/carro/carro';

@Injectable({
  providedIn: 'root'
})
export class UpdateCarroService {

  private readonly API = "http://localhost:8080/carro"

  constructor(private http: HttpClient) { }


  updateCarro(id: number, carro : Carro): Observable<Carro>{
    const url = `${this.API}/${id}`
    return this.http.put<any>(this.API, carro)
  }

  buscarPorId(id: number){
    const url = `${this.API}/${id}`
    return this.http.get<any>(url)


  }
}
