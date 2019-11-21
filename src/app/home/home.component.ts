import { TrainingService } from './../services/training.service';
import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
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
export class HomeComponent implements OnInit,AfterViewInit {
  generalCert: any;
  generalCerts: null;
  manufacturingCert: any;
  manufacturingCerts: null;
  learningCert: any;
  learningCerts: null;
  specialtyCert: any;
  specialtyCerts: null;
  certType: any;
  certTypes: any;
  path: any;
  paths: any;
  pathImg = '';
  constructor(private router: Router, private db: AngularFirestore,  private training: TrainingService) { }
  pathsRef: AngularFirestoreCollection<Path[]> = this.db.collection('paths');
  certsGeneralRef: AngularFirestoreCollection<Cert[]>;
  certsManufacturingRef: AngularFirestoreCollection<Cert[]>;
  certsLearningRef: AngularFirestoreCollection<Cert[]>;
  certsSpecialtyRef: AngularFirestoreCollection<Cert[]>;
  certTypesRef: AngularFirestoreCollection<CertType[]>; 

  pathsCollection$: Observable<any> = this.pathsRef.valueChanges();
  certsGeneralCollection$: Observable<any>;
  certsManufacturingCollection$: Observable<any>;
  certsLearningCollection$: Observable<any>;
  certsSpecialtyCollection$: Observable<any>;
  certTypeCollection$: Observable<any>;

  pathsDoc$: Observable<any>;
  certsDoc$: Observable<any>;
  certTypesDoc$: Observable<any>;
  currentState = '';
  currentShown = '';
  currentPaths = false;
  currentCertType = false;
  portalText = '';
  pathHero = '';
  pathName = '';
  ngOnInit() {
    this.currentState = 'state1';
    this.currentShown = 'paths';
    this.portalText = 'down';
    this.pathHero = 'out';
    this.getPaths();
    console.log(this.paths);
    console.log(this.generalCerts);
    console.log(this.certTypes);
  }
  ngAfterViewInit(){
    this.selectPaths();
  }
  getPaths() {
    this.pathsCollection$.subscribe(data => {
       console.log(data);
       this.paths = data;
       console.log(this.paths)
       return data; });
    }
    getGeneralCerts(path) {
      this.generalCerts = path.certTypes[0].certs;
      }
      getManufacturingCerts() {
        this.certsManufacturingCollection$.subscribe(data => {
           console.log(data);
           this.manufacturingCerts = data;
           return data; });
        }
        getLearningCerts() {
          this.certsLearningCollection$.subscribe(data => {
             console.log(data);
             this.learningCerts = data;
             return data; });
          }
          getSpecialtyCerts() {
            this.certsSpecialtyCollection$.subscribe(data => {
               console.log(data);
               this.specialtyCerts = data;
               return data; });
            }
      pathImage(path){
        this.pathImg = path;
      }
      getCertTypes(path) {
        this.certTypes = path.certTypes;
        console.log(this.certTypes);
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
    this.certTypes = path.certTypes;
    this.pathName = path.name;
    this.generalCerts = path.certTypes[0].certs;
    this.manufacturingCerts = path.certTypes[1].certs;
   /*  this.specialtyCerts = path.certTypes[2].certs; */
    this.currentPaths = false;
    this.currentCertType = true;
}
selectPaths() {
    this.currentPaths = true;
    this.currentCertType = false;
  }
}
