import { Component, input, NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { PatientdataService } from '../patientdata/patientdata.service';
import { HttpClient } from '@angular/common/http';
import { Patientdata } from '../patientdata/patientdata.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [RouterOutlet,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit{

  id = input.required<string>();

  constructor(private patientDataService: PatientdataService,
              private httpClient:HttpClient, private router:Router){}
  

  patient: Patientdata ={
    id: '',
  fullName:  '',
  dob:  '',
  sex:  '',
  address:  '',
  contact:  '',
  bloodgroup:  '',
  history:  '',
  operation:  '',
  admitdate: '',
  discharge:  '',
  };


  ngOnInit(): void {
    //getting data from the api 
    this.patientDataService.getSinglePatientData(this.id()).subscribe((patient)=>{
      this.patient = patient;
    });
    
  }

  //----------------update code here-----------------------
  
  updateData():void{
   this.patientDataService.updatePatientData(this.patient, this.id()).subscribe((patient)=>{
    alert("Updated successfully");
    console.log(patient);
    this.router.navigate(['search'])
   })
  }


  closePage(){
    alert("You are leaving the Page.");
    this.router.navigate(['search']);
  }

}
