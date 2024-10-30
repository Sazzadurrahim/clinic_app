import { Component, NgModule, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Patientdata } from '../patientdata/patientdata.model';
import { PatientdataService } from '../patientdata/patientdata.service';
import { error } from 'console';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  formValue!: FormGroup;
  patientData: Patientdata = new Patientdata();
  patient!: any;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private patientdataservice: PatientdataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      fullName: [''],
      dob: [''],
      sex: [''],
      contact: [''],
      address: [''],
      bloodgroup: [''],
      history: [''],
      operation: [''],
      admitdate: [''],
      discharge: [''],
    });
  }

  saveData() {
    this.patientData.fullName = this.formValue.value.fullName;
    this.patientData.dob = this.formValue.value.dob;
    this.patientData.sex = this.formValue.value.sex;
    this.patientData.contact = this.formValue.value.contact;
    this.patientData.address = this.formValue.value.address;
    this.patientData.bloodgroup = this.formValue.value.bloodgroup;
    this.patientData.history = this.formValue.value.history;
    this.patientData.operation = this.formValue.value.operation;
    this.patientData.admitdate = this.formValue.value.admitdate;
    this.patientData.discharge = this.formValue.value.discharge;

    this.patientdataservice.postPatientData(this.patientData).subscribe(
      (res) => {
        console.log(res);
        alert('Patient Data Added Successfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.router.navigate(['search']);
      },
      (err) => {
        alert('Error!');
      }
    );
  }
//-----------end of save button---------------------------

  cancelAdding(){
    alert("Surely You want to leave?");
    this.router.navigate(['search']);
  }

}
