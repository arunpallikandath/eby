import { Http } from '@angular/http';
import { Component} from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { Events } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  private loginrs:any;
  
  constructor(platform: Platform, statusBar: StatusBar, 
  splashScreen: SplashScreen, private http: Http, private events: Events) {

    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //
    http.get('https://api.github.com/users/hadley/orgs')
                  .subscribe(result => {
                    debugger;
                    this.loginrs =result.json()
                  });
    
    });

    //

  }
  //
  loadContent(loginrsItem){
     
    this.events.publish ('content-update', loginrsItem) 
  }
  //
}
