import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao8',
  templateUrl: './navegacao8.page.html',
  styleUrls: ['./navegacao8.page.scss'],
})
export class Navegacao8Page implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  showPageNavegacao1() {
    this.navController.navigateForward('navegacao');
  }
}
