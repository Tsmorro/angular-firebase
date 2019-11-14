import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../material-module';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      NgxSpinnerModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule,
      RouterModule.forChild([
        {
          path: '',
          component: LoginComponent
        }
      ])
    ],
    declarations: [
        LoginComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule { }
