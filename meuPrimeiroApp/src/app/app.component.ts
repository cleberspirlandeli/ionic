import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ProductsPage } from '../pages/products/products';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  
  @ViewChild(Nav) nav : Nav;
  text : string = '';
  rootPage: any = TabsPage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.pages = [
        { title: 'Início', component: HomePage},
        { title: 'Sobre', component: AboutPage },
        { title: 'Contato', component: ContactPage},
        { title: 'Produtos', component: ProductsPage }
      ];

    });

  }

  openPage(page : any) {
    this.nav.setRoot(page.component);
  }

  rightMenuClick(text : string) {
    this.text = text;
  }

  hideCard() {
    this.text = '';
  }

}

