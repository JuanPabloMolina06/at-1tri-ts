import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) {}

  async Iniciarjogo() {
    this.Mamifero();
  }

  async Mamifero() {
    const alert = await this.alertController.create({
      header: 'Pergunta 1',
      message: 'O animal que você está pensando é um mamífero?',
      buttons: [
        {
          text: 'Sim',
          handler: () => this.Uiva()
        },
        {
          text: 'Não',
          handler: () => this.Pernas()
        }
      ]
    });
    await alert.present();
  }

  async Uiva() {
    const alert = await this.alertController.create({
      header: 'Pergunta 2',
      message: 'O animal uiva?',
      buttons: [
        {
          text: 'Sim',
          handler: () => this.Resultado('Lobo')
        },
        {
          text: 'Não',
          handler: () => this.Resultado('Cachorro')
        }
      ]
    });
    await alert.present();
  }

  async Pernas() {
    const alert = await this.alertController.create({
      header: 'Pergunta 3',
      message: 'O animal tem pernas?',
      buttons: [
        {
          text: 'Sim',
          handler: () => this.Resultado('Lagarto')
        },
        {
          text: 'Não',
          handler: () => this.Resultado('Cobra')
        }
      ]
    });
    await alert.present();
  }

  async Resultado(animal: string) {
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `Você pensou em um ${animal}!`,
      buttons: ['OK']
    });
    await alert.present();
  }
}
