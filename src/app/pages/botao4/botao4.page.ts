import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-botao4',
  templateUrl: './botao4.page.html',
  styleUrls: ['./botao4.page.scss'],
})
export class Botao4Page implements OnInit {

  constructor(private navController: NavController) {}

  ngOnInit() {
  }

  showBotaoNavegation() {
    this.navController.navigateForward('botao');
  }
}
