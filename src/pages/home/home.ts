import { Http} from '@angular/http';
import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  private loginDetails: any;
  constructor(public navCtrl: NavController, private http: Http, private events: Events ) {
    //

    this.events.subscribe('content-update', (params) => this.updateLoginRs(params))
  }

  updateLoginRs(loginRs:any){

    this.loginDetails = loginRs
  }

}
