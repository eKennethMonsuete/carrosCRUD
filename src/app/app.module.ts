import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarroComponent } from './carro/carro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CreateCarroComponent } from './create-carro/create-carro/create-carro.component';
import { DeletarCarroComponent } from './deletar-carro/deletar-carro/deletar-carro.component';
import { UpdateCarroComponent } from './update-carro/update-carro/update-carro.component';

@NgModule({
  declarations: [
    AppComponent,
    CarroComponent,
    CreateCarroComponent,
    DeletarCarroComponent,
    UpdateCarroComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
