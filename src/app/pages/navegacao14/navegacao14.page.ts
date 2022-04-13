import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao14',
  templateUrl: './navegacao14.page.html',
  styleUrls: ['./navegacao14.page.scss'],
})
export class Navegacao14Page implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  showPageNavegacao1() {
    this.navController.navigateForward('navegacao');
  }
}
