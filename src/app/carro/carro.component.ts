import { Component, OnInit } from '@angular/core';
import { CarroService } from './carro.service';
import { Carro } from './carro';




@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  listaCarro : Carro[]=[];

  constructor(private service : CarroService) { }

  ngOnInit(): void {

    this.service.listar().subscribe((listaCarro) =>
      {this.listaCarro = listaCarro;});

}
}
