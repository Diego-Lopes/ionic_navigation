import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.page.html',
  styleUrls: ['./navegacao.page.scss'],
})
export class NavegacaoPage implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  showPageNavegacao2() {
    this.navController.navigateForward('navegacao2');
  }
  showPageNavegacao3() {
    this.navController.navigateForward('navegacao3');
  }
  showPageNavegacao4() {
    this.navController.navigateForward('navegacao4');
  }
  showPageNavegacao5() {
    this.navController.navigateForward('navegacao5');
  }
  showPageNavegacao6() {
    this.navController.navigateForward('navegacao6');
  }
  showPageNavegacao7() {
    this.navController.navigateForward('navegacao7');
  }
  showPageNavegacao8() {
    this.navController.navigateForward('navegacao8');
  }
  showPageNavegacao9() {
    this.navController.navigateForward('navegacao9');
  }
  showPageNavegacao10() {
    this.navController.navigateForward('navegacao10');
  }
  showPageNavegacao11() {
    this.navController.navigateForward('navegacao11');
  }
  showPageNavegacao12() {
    this.navController.navigateForward('navegacao12');
  }
  showPageNavegacao13() {
    this.navController.navigateForward('navegacao13');
  }
  showPageNavegacao14() {
    this.navController.navigateForward('navegacao14');
  }
  showPageNavegacao15() {
    this.navController.navigateForward('navegacao15');
  }
}
