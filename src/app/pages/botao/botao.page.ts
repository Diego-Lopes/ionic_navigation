import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.page.html',
  styleUrls: ['./botao.page.scss'],
})
export class BotaoPage implements OnInit {
  [x: string]: any;

  constructor(private navController: NavController) {}

  ngOnInit() {
  }

  showBotaoNavegation2() {
    this.navController.navigateForward('botao2');
  }
  showBotaoNavegation3() {
    this.navController.navigateForward('botao3');
  }
  showBotaoNavegation4() {
    this.navController.navigateForward('botao4');
  }
  showBotaoNavegation5() {
    this.navController.navigateForward('botao5');
  }

}
