import { Component, OnInit } from '@angular/core';
import {TrainingService } from '../services/training.service';
import { NgxSpinnerService  } from 'ngx-spinner';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  userId = '';
  userResults =[];
  tableResults=[];
  empName = '';
  empStatus = '';
  visible:boolean = false
  isOpen: boolean;
  constructor(private training: TrainingService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }


  quizresultslist(){
    this.spinner.show();
      this.training.quizResultsList(this.userId).subscribe((res:any)=>{
        console.log(res)
        this.userResults = res;
        this.empName = this.userResults[0].FirstName +' '+ this.userResults[0].LastName
        if(this.userResults[0].EmpStatus == "A"){
          this.empStatus = 'ACTIVE'
        }else{
          this.empStatus = 'INACTIVE'
        }
        this.visible = true;
        this.spinner.hide();
      });
    }

    toggle(toggleId){
      this.tableResults=[];
      for(let i=1;i<this.userResults.length;i++){
        if(this.userResults[i].cert_type == toggleId){
          this.tableResults.push(this.userResults[i]);
        }
      }

    }


}
