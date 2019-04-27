import { Component } from '@angular/core';
import {EstacionamentoService} from '../estacionamento.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  valor:Array<any>;
  items:Array<any>;
constructor(private estService: EstacionamentoService){}

ngOnInit(){
  this.items = this.estService.getPayService();
}

calcValue(value)
 {
    let horaEntrada = parseFloat(value.entrada.slice(0,2));
    let horaSaida = parseFloat(value.saida.slice(0,2));
    let minEntada = parseFloat(value.entrada.slice(3,5));
    let minSaida = parseFloat(value.entrada.slice(3,5));
    let result = 0.0;
 
    if(horaEntrada>horaSaida)
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
                result = Math.round(result/50.00*10.00);                    
        return  result;
  }

}
