import { Component, OnInit } from '@angular/core';

import { DeletarCarroService } from './deletar-carro.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Carro } from 'src/app/carro/carro';

@Component({
  selector: 'app-deletar-carro',
  templateUrl: './deletar-carro.component.html',
  styleUrls: ['./deletar-carro.component.css']
})
export class DeletarCarroComponent implements OnInit {

  Carro : Carro = {
    id :0,
    nome: '',
    modelo:'',
    cor: ''
  }

  constructor( private service: DeletarCarroService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((carro) =>{
      this.Carro = carro;
    })

  }

  excluirCarro1(){
    if(this.Carro.id){
      this.service.excluirCarro(this.Carro.id).subscribe(() =>{
      alert("excluído de maneira correta")
      this.router.navigate([""])

      })
    }
  }



}
