import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao5',
  templateUrl: './navegacao5.page.html',
  styleUrls: ['./navegacao5.page.scss'],
})
export class Navegacao5Page implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  showPageNavegacao1() {
    this.navController.navigateForward('navegacao');
  }
}
