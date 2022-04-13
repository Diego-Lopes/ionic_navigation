import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao11',
  templateUrl: './navegacao11.page.html',
  styleUrls: ['./navegacao11.page.scss'],
})
export class Navegacao11Page implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  showPageNavegacao1() {
    this.navController.navigateForward('navegacao');
  }
}
