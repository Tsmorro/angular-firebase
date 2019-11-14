import { Injectable, OnInit } from '@angular/core';
import { User } from '../login/login.component';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Path, CertType, Cert } from '../interfaces/interfaces';

import { firestore, database } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export class TrainingService {
  constructor(private http: HttpClient, private db: AngularFirestore) {}
  pathsRef: AngularFirestoreCollection<Path[]> = this.db.collection('paths');
  certsRef: AngularFirestoreCollection<Cert[]> = this.db.collection('certs');
  certTypesRef: AngularFirestoreCollection<CertType[]> = this.db.collection('certTypes');

  pathsCollection$: Observable<any> = this.pathsRef.valueChanges();

  certsCollection$: Observable<any> = this.certsRef.valueChanges();
  certTypeCollection$: Observable<any> = this.certTypesRef.valueChanges();

  pathsDoc$: Observable<any>;
  certsDoc$: Observable<any>;
  certTypesDoc$: Observable<any>;

  baseUrl = 'http://192.168.0.43:3000/materialinmotion/training/';
  pathsURL = 'paths';
  certsURL = 'certs';
  certTypesURL = 'certType';
 
  empId: any; 
 
quizResultsList(userId) {
    console.log(userId);
    this.empId = userId;
    return this.http.get(this.baseUrl + 'resultlist/' + userId);
  }

quizResults() {
    return this.http.get(this.baseUrl + 'quizuserresults');
  }

trainingModule() {
    return this.http.get(this.baseUrl + 'trainingentry/ComodityList');
  }

trainerNames() {
    return this.http.get(this.baseUrl + 'trainingentry/trainernames');
  }

traineeCheck(name) {
     return this.http.get(this.baseUrl + 'trainingentry/traineecheck/' + name);
  }

submitResult(details) {
    return this.http.post(this.baseUrl + 'trainingentry/result', details);
 }

objectId(assettag) {
  return this.http.get(this.baseUrl + 'trainingentry/objectid/' + assettag);
}

cmmsSubmit(details) {
  return this.http.post(this.baseUrl + 'trainingentry/cmmssubmit', details);
}

trainingModuleCollection() {
  return this.http.get(this.baseUrl + 'trainingmoduleentry/ComodityCollection');
}

trainingModuleAdd(details) {
  return this.http.post(this.baseUrl + 'trainingmoduleentry/CommodityCollection/add', details);
}

trainingModuleUpdateDetails(commId) {
  return this.http.get(this.baseUrl + 'trainingmoduleentry/commodityCollection/update/' + commId);
}

trainingModuleUpdateForm(details, commId) {
  return this.http.put(this.baseUrl + 'trainingmoduleentry/commodityCollection/update/' + commId, details);
}

deleteTrainingModule(commId) {
  return this.http.delete(this.baseUrl + 'trainingmoduleentry/commodityCollection/delete/' + commId);
}

departmentCollection() {
  return this.http.get(this.baseUrl + 'trainingmoduleentry/departmentcollection');
}

comoodityCollectionDept(dept) {
  return this.http.get(this.baseUrl + 'trainingmoduleentry/commoditycollectiondept/' + dept);
}

questionsCollection(deptId) {
  return this.http.get(this.baseUrl + 'questionsentry/questionscollection/' + deptId);
}

questionsAddCollection(deptId) {
  return this.http.get(this.baseUrl + 'questionsentry/questionsaddcollection/' + deptId);
}

questionsCollectionNew() {
  return this.http.get(this.baseUrl + 'questions/collection');
}

trainingModulesCollection() {
  return this.http.get(this.baseUrl + 'commoditycollectiondetails');
}

newQuestionAdd(questiondata) {
  return this.http.post(this.baseUrl + 'questionadd', questiondata);
}

deleteQuestion(questionId) {
  return this.http.delete(this.baseUrl + 'questiondelete/' + questionId);
}

questionupdate(questionid, questionData) {
  return this.http.put(this.baseUrl + 'questionupdate/' + questionid, questionData);
}

mandatoryResultUpdate(questionid, mandatoryFlag) {
  return this.http.put(this.baseUrl + 'questionmandatoryupdate/' + questionid, mandatoryFlag);
}

questionsModules(status, modulesData) {
  return this.http.put(this.baseUrl + 'questionmodulesupdate/' + status, modulesData);
}
}
