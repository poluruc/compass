import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss']
})
export class LoginPage {

  constructor(public router: Router) {
  }
  goToHomePage(params){
    if (!params) params = {};
    this.router.navigateByUrl('/home');
  }
}
