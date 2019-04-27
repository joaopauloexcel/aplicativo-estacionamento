import { Component } from '@angular/core';
import {EstacionamentoService} from '../estacionamento.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  constructor(private estService:EstacionamentoService){}

  ngOnInit() {
    this.estService.ticket='';
  }
}
