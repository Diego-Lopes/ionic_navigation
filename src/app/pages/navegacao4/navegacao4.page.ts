import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao4',
  templateUrl: './navegacao4.page.html',
  styleUrls: ['./navegacao4.page.scss'],
})
export class Navegacao4Page implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  showPageNavegacao1() {
    this.navController.navigateForward('navegacao');
  }
}
