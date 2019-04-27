import { Injectable } from '@angular/core';
import {Estacionamento}from './estacionamento';

@Injectable({
  providedIn: 'root'
})
export class EstacionamentoService {
  receipts: Array<Estacionamento>=[];  
  ticket:string;
  
  constructor() { }

  okPayService(value)
  {
      this.receipts.push({
        ticket: value.ticket, 
        entrada: value.entrada,  
        saida: value.saida
      });
  }

    getPayService()
    {
      return this.receipts;
    }
}
