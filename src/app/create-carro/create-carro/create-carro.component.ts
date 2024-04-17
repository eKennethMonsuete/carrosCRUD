import { Component, OnInit } from '@angular/core';
import { CreateCarroService } from './create-carro.service';
import { Router } from '@angular/router';

export interface Carro{
  nome : string;
  modelo : String;
  cor: String;
}

@Component({
  selector: 'app-create-carro',
  templateUrl: './create-carro.component.html',
  styleUrls: ['./create-carro.component.css']
})
export class CreateCarroComponent implements OnInit {

  Carro : Carro[]=[];
  salvarCarro : Carro = {nome : '', modelo:'', cor: ''}


  constructor(private service : CreateCarroService,
              private router : Router
  ) { }

  ngOnInit(): void {
  }

  cadastar(){
    this.service.cadastrarCarro({
      nome : this.salvarCarro.nome,
      modelo: this.salvarCarro.modelo,
      cor : this.salvarCarro.cor}).subscribe(resposta =>
        {alert('carro cadastrado');
        this.router.navigate([""])

        },
        error =>{}
      )
  }

}
