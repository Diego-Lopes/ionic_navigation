import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-botao3',
  templateUrl: './botao3.page.html',
  styleUrls: ['./botao3.page.scss'],
})
export class Botao3Page implements OnInit {

  constructor(private navController: NavController) {}

  ngOnInit() {
  }

  showBotaoNavegation() {
    this.navController.navigateForward('botao');
  }

}
