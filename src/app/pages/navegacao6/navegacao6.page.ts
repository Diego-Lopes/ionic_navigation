import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao6',
  templateUrl: './navegacao6.page.html',
  styleUrls: ['./navegacao6.page.scss'],
})
export class Navegacao6Page implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  showPageNavegacao1() {
    this.navController.navigateForward('navegacao');
  }
}
