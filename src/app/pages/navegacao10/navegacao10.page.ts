import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao10',
  templateUrl: './navegacao10.page.html',
  styleUrls: ['./navegacao10.page.scss'],
})
export class Navegacao10Page implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  showPageNavegacao1() {
    this.navController.navigateForward('navegacao');
  }
}
