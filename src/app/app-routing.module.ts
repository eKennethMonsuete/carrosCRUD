import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroComponent } from './carro/carro.component';
import { CreateCarroComponent } from './create-carro/create-carro/create-carro.component';
import { DeletarCarroComponent } from './deletar-carro/deletar-carro/deletar-carro.component';
import { UpdateCarroComponent } from './update-carro/update-carro/update-carro.component';

const routes: Routes = [

  {path:"", component : CarroComponent},

  {path: "create", component: CreateCarroComponent },

  {path: "delete/:id", component: DeletarCarroComponent },

  {path: "update/:id", component: UpdateCarroComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
