import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyBSJOM5DL0p-ZQnn3BVU03NN_Z9PORn7kc',
  authDomain: 'testangularfire2-4f7dc.firebaseapp.com',
  databaseURL: 'https://testangularfire2-4f7dc.firebaseio.com',
  storageBucket: 'testangularfire2-4f7dc.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
