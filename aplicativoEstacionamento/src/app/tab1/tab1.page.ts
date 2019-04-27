import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import {EstacionamentoService} from '../estacionamento.service';
import {NewItemPage} from '../new-item/new-item.page'
import { NavController } from '@ionic/angular';
import {Estacionamento} from '../estacionamento';
import { strict } from 'assert';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  ticket:string='';
  
  constructor(){}

  ngOnInit() {
    this.ticket='';
  }
}
