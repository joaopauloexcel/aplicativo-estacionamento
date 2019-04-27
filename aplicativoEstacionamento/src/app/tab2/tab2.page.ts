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

}
