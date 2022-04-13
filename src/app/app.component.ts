import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    { title: 'buttom1', url: '/pages/navegacao', icon: 'warning' },
    { title: 'buttom2', url: '/pages/navegacao2', icon: 'warning' },
    { title: 'buttom3', url: '/pages/navegacao3', icon: 'warning' },
    { title: 'buttom4', url: '/pages/navegacao4', icon: 'warning' },
    { title: 'buttom5', url: '/pages/navegacao5', icon: 'warning' },
    { title: 'buttom6', url: '/pages/navegacao6', icon: 'warning' },
    { title: 'buttom7', url: '/pages/navegacao7', icon: 'warning' },
    { title: 'buttom8', url: '/pages/navegacao8', icon: 'warning' },
    { title: 'buttom9', url: '/pages/navegacao9', icon: 'warning' },
    { title: 'buttom10', url: '/pages/navegacao10', icon: 'warning' },
    { title: 'buttom11', url: '/pages/navegacao11', icon: 'warning' },
    { title: 'buttom12', url: '/pages/navegacao12', icon: 'warning' },
    { title: 'buttom13', url: '/pages/navegacao13', icon: 'warning' },
    { title: 'buttom14', url: '/pages/navegacao14', icon: 'warning' },
    { title: 'buttom15', url: '/pages/navegacao15', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
