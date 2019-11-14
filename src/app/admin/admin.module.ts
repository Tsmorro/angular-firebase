import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../material-module';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
    imports: [
      CommonModule,
      NgxSpinnerModule,
      CommonModule,
      MaterialModule,
      AngularFireAuthModule,
      AngularFirestoreModule,
      AngularFireDatabaseModule,
      RouterModule.forChild([
        {
          path: '',
          component: AdminComponent
        }
      ])
    ],
    declarations: [
        AdminComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
