import { Http} from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   private loginrs: any;
  constructor(public navCtrl: NavController, private http: Http) {


  }


}
