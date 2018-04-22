import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

//firebase
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database'

//environment config
import {environment} from '../environments/environment';

//importacion de componentes
import { BarltComponent } from './componentes/barlt/barlt.component';
import { InfocomComponent } from './componentes/infocom/infocom.component';
import { InfopedComponent } from './componentes/infoped/infoped.component';
import { AddprodComponent } from './componentes/addprod/addprod.component'

//importacion de servicios
import { FiresService } from './servicios/fires.service';
import { ComcardComponent } from './componentes/tarjetas/comcard/comcard.component';
import { NavbarComponent } from './componentes/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    BarltComponent,
    InfocomComponent,
    InfopedComponent,
    AddprodComponent,
    ComcardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [FiresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
