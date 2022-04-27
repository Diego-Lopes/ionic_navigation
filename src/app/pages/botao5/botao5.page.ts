import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-botao5',
  templateUrl: './botao5.page.html',
  styleUrls: ['./botao5.page.scss'],
})
export class Botao5Page implements OnInit {

  constructor(private navController: NavController) {}

  ngOnInit() {
  }

  showBotaoNavegation() {
    this.navController.navigateForward('botao');
  }

}
