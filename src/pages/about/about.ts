import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss']
})
export class AboutPage {
  cards: any;
  category: string = 'gear';

  constructor(public router: Router) {
    this.cards = new Array(10);
  }
  
}
