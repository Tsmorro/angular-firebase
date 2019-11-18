import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../material-module';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
    imports: [
      CommonModule,
      NgxSpinnerModule,
      CommonModule,
      MaterialModule,
      FlexLayoutModule,
      AngularFireAuthModule,
      AngularFirestoreModule,
      AngularFireDatabaseModule,
      RouterModule.forChild([
        {
          path: '',
          component: HomeComponent
        }
      ])
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/mdi.svg'));
  }
 }
