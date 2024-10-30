import { Component, OnInit } from '@angular/core';
import { PatientdataService } from '../patientdata/patientdata.service';
import { Router } from '@angular/router';
import { Patientdata } from '../patientdata/patientdata.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-showdata',
  standalone: true,
  imports: [],
  templateUrl: './showdata.component.html',
  styleUrl: './showdata.component.css'
})
export class ShowdataComponent implements OnInit {

  jsondata: Patientdata[] = [];

  constructor(private patientDataService: PatientdataService, private router: Router) { }


  ngOnInit(): void {
    this.patientDataService.getPatientData().subscribe((data) => {
      this.jsondata = data;
    })
  }

  //method for Doctor show button-------------------
  showDoctorData(){
    this.router.navigate(['/doctordata']);
  }

  //for close button
  closeShowData(){
    this.router.navigate(['/search'])
  }

}
