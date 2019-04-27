import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EstacionamentoService } from '../estacionamento.service';
import {Estacionamento} from '../estacionamento';
import { elementStart } from '@angular/core/src/render3';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage implements OnInit {
  estacionamento:Estacionamento;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private estService:EstacionamentoService) { }

  ngOnInit() {
   this.estacionamento = new Estacionamento();
   this.route.params.subscribe(
     data =>{
       this.estacionamento.ticket = data.id;
     }
   );
   this.estacionamento.valor=0.0;
   this.estacionamento.entrada='';
   this.estacionamento.entrada='';
  }

  calcTime(){
    let horaEntrada = parseFloat(this.estacionamento.entrada.slice(11,13));
    let horaSaida = parseFloat(this.estacionamento.saida.slice(11,13));
    let minEntada =  parseFloat(this.estacionamento.entrada.slice(14,16));
    let minSaida = parseFloat(this.estacionamento.saida.slice(14,16));
    let result=0.0;
      if(this.estacionamento.entrada!=='' && this.estacionamento.saida!=='')
      {  
        if(horaEntrada>horaSaida){
          if(minEntada>minSaida){
            result+=((23.00-horaEntrada+horaSaida)*60.00)+(60.00-minEntada+minSaida);
          }
          else{
            result+=((24.00-horaEntrada+horaSaida)*60.00)+(minSaida-minEntada); 
          }
        }
        else{
          if(minEntada>minSaida){
            if(horaEntrada===horaSaida){
              result+=(23*60.00)+(60.00-minEntada+minSaida);
            }
            else{
              result+=((horaSaida-horaEntrada-1)*60.00)+(60.00-minEntada+minSaida);
            }           
          }
          else{
            result+=((horaSaida-horaEntrada)*60.00)+(minSaida-minEntada); 
          }
        }
        this.estacionamento.valor = (result/50.00*10.00);        
      }
      else
      {
        alert('Falta valores a serem definidos!');
      }    
  }   

  okPay(value){
      this.estService.okPayService(value);    
  }

  goBack(){
    this.router.navigate(['/tab1']);
  }

}
