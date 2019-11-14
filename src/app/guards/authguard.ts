import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { TrainingService } from '../services/training.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
      public router: Router,
      public results: TrainingService
  ) {}

  canActivate() {
      const currentUser = sessionStorage.getItem('empId');
      if (currentUser) {
          // authorised so return true
          return true;
      } else {

      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login']);
      return false;
  }
}
}
