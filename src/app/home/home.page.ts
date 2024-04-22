import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  r1=""
  r2=""
  r3=""
  r4=""
  animal=""
  Advinhar(){
    if(this.r1=="s"){
      if(this.r2=="s"){
        this.animal="cachorro"
      }
      else{
        if(this.r3=="s"){
          this.animal="lagarto"
        }
        else{
          this.animal="lobo"
        }
      }
    }
    else{
      if(this.r2=="n"){
        if(this.r3=="n"){
          this.animal="caracol"
          if(this.r4=="s"){
            this.animal = "minhoca"
          }
        }
        else{
          if(this.r4=="s"){
            this.animal="cobra"
          }
        }
      }
    }
  }
  
  constructor(public alertController: AlertController) {}
}
