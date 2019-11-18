import { Component, OnInit } from '@angular/core';
import { Animations } from './animations/animations';
import { FirebaseApp } from '@angular/fire'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    Animations.animateMenu,
    Animations.animateMenu2,
    Animations.animateMenuButton1,
    Animations.animateMenuButton2,
    Animations.animateMenuButton3,
    Animations.animateCloseMenu,
    Animations.animateHero,
    Animations.animateHero2
  ]
})
export class AppComponent  {
  title = 'training-new';
  currentState = 'state1';
  constructor(public fireapp: FirebaseApp){}

  
  changeState() {
    this.currentState = this.currentState === 'state1' ? 'state2' : 'state1';
  }
}
