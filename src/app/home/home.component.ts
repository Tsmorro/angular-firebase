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
  generalCert: any;
  generalCerts: any;
  certType: any;
  certTypes: any;
  path: any;
  paths: any;
  pathImg = '';
  constructor(private router: Router, private db: AngularFirestore,  private training: TrainingService) { }
  pathsRef: AngularFirestoreCollection<Path[]> = this.db.collection('paths');
  certsGeneralRef: AngularFirestoreCollection<Cert[]> = this.db.collection('certTypes').doc('General').collection('certs');
  certTypesRef: AngularFirestoreCollection<CertType[]> = this.db.collection('certTypes');

  pathsCollection$: Observable<any> = this.pathsRef.valueChanges();
  
  certsGeneralCollection$: Observable<any> = this.certsGeneralRef.valueChanges();
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
    this.getCertTypes();
    this.getGeneralCerts();
    console.log(this.paths);
    console.log(this.generalCerts);
    console.log(this.certTypes);
  }
  getPaths() {
    this.pathsCollection$.subscribe(data => {
       console.log(data);
       this.paths = data;
       return data; });
    }
    getGeneralCerts() {
      this.certsGeneralCollection$.subscribe(data => {
         console.log(data);
         this.generalCerts = data;
         return data; });
      }
      getCertTypes() {
        this.certTypeCollection$.subscribe(data => {
           console.log(data);
           this.certTypes = data;
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
  
    this.currentPaths = false;
}
selectPaths() {
   
    this.currentPaths = true;
  }
}
