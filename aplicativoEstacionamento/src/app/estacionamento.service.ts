import { Injectable } from '@angular/core';
import {Estacionamento}from './model/estacionamento';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstacionamentoService {
 // receipts: Array<Estacionamento>=[];  
  ticket:string;
  receipts: Observable<Estacionamento[]>;
  estCollection: AngularFirestoreCollection<Estacionamento>;
  
  constructor(private afs: AngularFirestore) 
  {//Já quero puxar a coleção, preecher ideas com coleção que tem no firebase
    this.estCollection = this.afs.collection<Estacionamento>('receipts');

    this.receipts = this.estCollection.snapshotChanges()//retorna um Observable
    .pipe( 
        map( actions => {
          return actions.map( a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data}
          } );
        }))                   
  }

  /*okPayService(value)
  {
      this.receipts.push({
        ticket: value.ticket, 
        entrada: value.entrada,  
        saida: value.saida
      });
  }*/

  okPayService(est:any):Promise<DocumentReference>{
    return this.estCollection.add(est);
  }

    /*getPayService()
    {
      return this.receipts;
    }*/

    getPayService(): Observable<Estacionamento[]>{
      return this.receipts;
    }
}
