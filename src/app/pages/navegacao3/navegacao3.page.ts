import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao3',
  templateUrl: './navegacao3.page.html',
  styleUrls: ['./navegacao3.page.scss'],
})
export class Navegacao3Page implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  showPageNavegacao1() {
    this.navController.navigateForward('navegacao');
  }
}
