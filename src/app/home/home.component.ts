import { TrainingService } from './../services/training.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Animations } from '../animations/animations';
import { Path, CertType, Cert } from '../interfaces/interfaces';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
export class HomeComponent implements OnInit {
  cert: any;
  certs: any;
  certType: any;
  certTypes: any;
  path: any;
  paths: any;
  pathImg = '';
  constructor(private router: Router, private db: AngularFirestore,  private training: TrainingService) { }
  pathsRef: AngularFirestoreCollection<Path[]> = this.db.collection('paths');
  certsRef: AngularFirestoreCollection<Cert[]> = this.db.collection('certs');
  certTypesRef: AngularFirestoreCollection<CertType[]> = this.db.collection('certTypes');

  pathsCollection$: Observable<any> = this.pathsRef.valueChanges();
  
  certsCollection$: Observable<any> = this.certsRef.valueChanges();
  certTypeCollection$: Observable<any> = this.certTypesRef.valueChanges();

  pathsDoc$: Observable<any>;
  certsDoc$: Observable<any>;
  certTypesDoc$: Observable<any>;
  currentState = '';
  currentShown = '';
  currentPaths = true;
  currentPath = false;
  portalText = '';
  pathHero = '';
  ngOnInit() {
    this.currentState = 'state1';
    this.currentShown = 'paths';
    this.portalText = 'down';
    this.pathHero = 'out';
    this.getPaths();
    this.getCerts();
    console.log(this.paths);
    console.log(this.certs);
    console.log(this.certTypes);
  }
  getPaths() {
    this.pathsCollection$.subscribe(data => {
       console.log(data);
       this.paths = data;
       return data; });
    }
    getCerts() {
      this.certsCollection$.subscribe(data => {
         console.log(data);
         this.certs = data;
         return data; });
      }
      getCertTypes() {
        this.certTypeCollection$.subscribe(data => {
           console.log(data);
           return data; });
        }
  changeState() {
    this.currentState = this.currentState === 'state1' ? 'state2' : 'state1';
  }
  upDown() {
    this.portalText = this.portalText === 'up' ? 'down' : 'up';
  }
  inOut() {
    this.pathHero = this.pathHero === 'out' ? 'in' : 'out';
  }
  selectPath(path) {
    this.pathImg = path;
    this.currentPath = true;
    this.currentPaths = false;
}
selectTiles() {
    this.currentPath = false;
    this.currentPaths = true;
  }
}
