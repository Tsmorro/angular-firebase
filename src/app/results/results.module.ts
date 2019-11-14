import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../material-module';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResultsComponent } from './results.component';

@NgModule({
    imports: [
      CommonModule,
      NgxSpinnerModule,
      CommonModule,
      MaterialModule,
      RouterModule.forChild([
        {
          path: '',
          component: ResultsComponent
        }
      ])
    ],
    declarations: [
        ResultsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ResultsModule { }
