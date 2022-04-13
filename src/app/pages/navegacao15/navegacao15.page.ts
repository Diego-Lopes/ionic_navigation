import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao15',
  templateUrl: './navegacao15.page.html',
  styleUrls: ['./navegacao15.page.scss'],
})
export class Navegacao15Page implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  showPageNavegacao1() {
    this.navController.navigateForward('navegacao');
  }
}
