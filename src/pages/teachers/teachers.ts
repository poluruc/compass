import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'page-teachers',
  templateUrl: 'teachers.html'
})
export class TeachersPage {

  constructor(public menuCtrl: MenuController, public router: Router, public navCtrl: NavController) {
  }

  toggleMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
    this.router.navigateByUrl('/app-menu');
  }
  
}
