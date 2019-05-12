import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';

import {FirestoreSettingsToken, AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {ReactiveFormsModule} from '@angular/forms';

import * as firebase from 'firebase';

firebase.initializeApp(environment.firebase);


@NgModule({  
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    ReactiveFormsModule,
    IonicStorageModule.forRoot()],

  providers: [
    StatusBar,
    SplashScreen,   
    { provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, 
      useValue:{}}
  ],
  
  bootstrap: [AppComponent]
})

export class AppModule {}
