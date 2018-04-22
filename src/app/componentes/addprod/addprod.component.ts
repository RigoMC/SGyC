import { Component, OnInit } from '@angular/core';

//servicio de firebase database
import { FiresService } from '../../servicios/fires.service';
import { element } from 'protractor';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css']
})
export class AddprodComponent implements OnInit {

  comandasArray : any[];

  constructor(private firesService : FiresService) { }

  ngOnInit() {
    this.firesService.getComandas().snapshotChanges().subscribe(item => {
                                                                          this.comandasArray = [];
                                                                          item.forEach(element => {
                                                                                                    let x = element.payload.toJSON();
                                                                                                    x['$key'] = element.key;
                                                                                                    this.comandasArray.push(x);
                                                                                                  })
                                                                        });
  }

  addComanda(t1,t2,t3)
  {
    var x = t1.value+','+t2.value+','+t3.value;
    var y = (t1.value*8)+(t2.value*8)+(t3.value*8);
    this.firesService.setComandas('sin folio',x,y);
    t1.value = null;
    t2.value = null;
    t3.value = null;
  }
}
