import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EstacionamentoService } from '../estacionamento.service';
import {Estacionamento} from '../estacionamento';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage implements OnInit {
  estacionamento:Estacionamento;
  valor: Number;

  constructor(private route: ActivatedRoute,
              private estService:EstacionamentoService) { }

  ngOnInit() {
   this.estacionamento = new Estacionamento();
   this.route.params.subscribe(
     data =>{
       this.estacionamento.ticket = data.id;
     }
   );
   this.valor=0.0;
   this.estacionamento.entrada='';
   this.estacionamento.saida='';
  }

  calcTime()
  { this.valor=0.0;
    var horaEntrada = parseInt(this.estacionamento.entrada.slice(11,13));
    var horaSaida = parseFloat(this.estacionamento.saida.slice(11,13));
    var minEntada =  parseFloat(this.estacionamento.entrada.slice(14,16));
    var minSaida = parseFloat(this.estacionamento.saida.slice(14,16));
    var result=0.0;
    if(this.estacionamento.entrada!=='' && this.estacionamento.saida!=='')
    {    if(horaEntrada>horaSaida)
          {   if(minEntada>minSaida)
                result+=((23.00-horaEntrada+horaSaida)*60.00)+(60.00-minEntada+minSaida);
              else
                result+=((24.00-horaEntrada+horaSaida)*60.00)+(minSaida-minEntada); 
          }
          else 
          if(horaEntrada===horaSaida)
            { if(minEntada>minSaida)
                result+=(23*60.00)+(60.00-minEntada+minSaida);
              else
                result+=((horaSaida-horaEntrada)*60.00)+(minSaida-minEntada);
            } 
          else
              result+=((horaSaida-horaEntrada-1)*60.00)+(60.00-minEntada+minSaida);                   
      this.valor = Math.round(result/50.00*10.00);                                    
    }         
    else
       alert('Falta valores a serem definidos!');   
  }   

  okPay(value){
    var horaEntrada = parseInt(this.estacionamento.entrada.slice(11,13));
    var horaSaida = parseFloat(this.estacionamento.saida.slice(11,13));
    var minEntada =  parseFloat(this.estacionamento.entrada.slice(14,16));
    var minSaida = parseFloat(this.estacionamento.saida.slice(14,16));
    this.estacionamento.entrada =(horaEntrada + ':' + (minEntada<10?'0'+minEntada:minEntada)).toString();
    this.estacionamento.saida =(horaSaida + ':' + (minSaida<10?'0' + minSaida:minSaida)).toString();
      this.estService.okPayService(value);   
      this.estService.ticket='';
  }
}
