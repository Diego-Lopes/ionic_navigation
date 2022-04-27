import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao13',
  templateUrl: './navegacao13.page.html',
  styleUrls: ['./navegacao13.page.scss'],
})
export class Navegacao13Page implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  showPageNavegacao1() {
    this.navController.navigateForward('navegacao');
  }
}
