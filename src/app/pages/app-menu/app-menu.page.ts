import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.page.html',
  styleUrls: ['./app-menu.page.scss'],
})
export class AppMenuPage implements OnInit {

  pages: Array<{ title: string, url: any, icon: string }>;

  constructor() {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', url: '', icon: 'game-controller-b' },
      { title: 'Activity', url: '', icon: 'browsers' },
      { title: 'Contacts', url: '', icon: 'play' },
      { title: 'Add Project', url: '', icon: 'settings' },
      { title: 'Settings', url: '', icon: 'settings' }
    ];

   }

  ngOnInit() {
  }

  openPage(p:any): void {

  }
}
