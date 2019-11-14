import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../services/training.service';
import { NgxSpinnerService  } from 'ngx-spinner';

import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';


export interface User {
  'FirstName': string;
  'LastName': string;
  'EmpStatus': string;
  'ImageID': string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
submitted = false;
loading = false;
returnUrl: string;
error: string;


constructor(public spinner: NgxSpinnerService, private formBuilder: FormBuilder,
            private snackBar: MatSnackBar, private training: TrainingService, private route: ActivatedRoute, private router: Router) { }
toast: any;
res: any;
user: any;
titleId: any;
loginForm: FormGroup;
userId = '';
empId: any;
userResults = [];
tableResults = [];
empName = '';
empStatus = '';
visible = false;
isOpen: boolean;
durationInSeconds = 2;

ngOnInit() {
  sessionStorage.clear();
  console.log(sessionStorage.getItem('empId'));
  this.loginForm =  this.formBuilder.group({
    ImageID: new FormControl('', Validators.required),
  });
  this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
}

get f() {
  return this.loginForm.controls;
}

login() {
  this.submitted = true;


  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }

  this.loading = true;

  this.training.quizResultsList(this.f.ImageID)
    .pipe(first())
    .subscribe(res => {


       this.user = res;
       console.log(this.user);
        /*             sessionStorage.setItem('userPlant', res.json().Plant );
                   sessionStorage.setItem('userName', res.json().userName );*/
      if (this.user.EmpStatus === 'A') {
        this.openSnackBar();
        this.router.navigateByUrl('/learningpaths');
      // tslint:disable-next-line: align
      } else {
        alert('Invalid username/password. Please check and try again or contact the IT team to grant you access');
      }
    });
  }
  quizresultslist(userId) {
    this.spinner.show();
    this.empId = this.f.userId;
    this.training.quizResultsList(this.user.ImageID).subscribe((res: any) => {
        console.log(res);
        this.userResults = res;
        this.empName = this.userResults[0].FirstName + ' ' + this.userResults[0].LastName;
        this.empId = this.userResults[0].ImageID;
        sessionStorage.setItem('empName', JSON.stringify(this.empName));
        sessionStorage.setItem('ImageID', JSON.stringify(this.empId) );
        if (this.userResults[0].EmpStatus === 'A') {
          this.empStatus = 'ACTIVE';
        } else {
          this.empStatus = 'INACTIVE';
        }
        this.visible = true;
        this.spinner.hide();
      });
    }
    openSnackBar() {
      // tslint:disable-next-line: no-use-before-declare
      this.snackBar.openFromComponent(SnackBarComponent, {
        duration: this.durationInSeconds * 1000,
      });
    }
  }

@Component({
  selector: 'app-snack-bar-component-snack',
  templateUrl: 'snack-bar-component-snack.html',
  styles: [`
    .loginSuccessful {
      color: #001a46;
    }
  `],
})

export class SnackBarComponent {}

