import { Injectable } from '@angular/core';

//Se importa el modulo de firestore
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';

@Injectable()
export class FiresService {

  comandaList : AngularFireList<any>; 

  constructor(private firedb : AngularFireDatabase) { }

  getComandas()
  {
    this.comandaList = this.firedb.list('folios');
    return this.comandaList;
  }

  setComandas(folio: string, producto: string, costo: number)
  {
    this.comandaList.push({
      folio : folio,
      productos : producto,
      costo : costo
    });
  }

}
