import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao9',
  templateUrl: './navegacao9.page.html',
  styleUrls: ['./navegacao9.page.scss'],
})
export class Navegacao9Page implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  showPageNavegacao1() {
    this.navController.navigateForward('navegacao');
  }
}
