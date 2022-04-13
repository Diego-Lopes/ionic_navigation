import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao7',
  templateUrl: './navegacao7.page.html',
  styleUrls: ['./navegacao7.page.scss'],
})
export class Navegacao7Page implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  showPageNavegacao1() {
    this.navController.navigateForward('navegacao');
  }
}
