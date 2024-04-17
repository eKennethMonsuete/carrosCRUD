import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/carro/carro';
import { UpdateCarroService } from './update-carro.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-carro',
  templateUrl: './update-carro.component.html',
  styleUrls: ['./update-carro.component.css']
})
export class UpdateCarroComponent implements OnInit {

  Carro : Carro = {
    id :0,
    nome: '',
    modelo:'',
    cor: ''
  }

  constructor(
    private UpdateCarro : UpdateCarroService,
    private  route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
        this.UpdateCarro.buscarPorId(parseInt(id!)).subscribe((carro) =>{
              this.Carro = carro;
  })}

  updateCar(){
    this.UpdateCarro.updateCarro(this.Carro.id, this.Carro).subscribe(
      resposta =>{
        console.log(this.Carro)
        console.log(resposta)
      }, error =>{
        console.log(error)
      }

    )
  }


}
