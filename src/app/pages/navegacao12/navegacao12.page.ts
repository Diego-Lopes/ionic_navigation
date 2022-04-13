import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao12',
  templateUrl: './navegacao12.page.html',
  styleUrls: ['./navegacao12.page.scss'],
})
export class Navegacao12Page implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  showPageNavegacao1() {
    this.navController.navigateForward('navegacao');
  }
}
