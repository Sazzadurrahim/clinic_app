import { Component, OnInit } from '@angular/core';
import { Doctordata } from './doctordata.model';
import { DoctordataService } from './doctordata.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctordata',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './doctordata.component.html',
  styleUrl: './doctordata.component.css'
})
export class DoctordataComponent implements OnInit{

  formValue!:FormGroup;

  doctorDataObj:Doctordata=new Doctordata();

  doctorData!:any;
  showAdd!:boolean;
  showUpdate!:boolean;

  constructor(private formBuilder:FormBuilder, private doctordataService:DoctordataService,
              private router:Router){}

  ngOnInit(): void {
   this.formValue=this.formBuilder.group({
    docName:[''],
    sex:[''],
    department:[''],
    availability:[''],
    contact:[''],
    address:['']
   });
   this.getAllDoctor();
  }

  //method for add button at the corner of the Nav
  addDoctor(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  //method for add button at the bottom of the form
  addDoctorInfo(){
    this.doctorDataObj.name=this.formValue.value.docName;
    this.doctorDataObj.sex=this.formValue.value.sex;
    this.doctorDataObj.department=this.formValue.value.department;
    this.doctorDataObj.availability=this.formValue.value.availability;
    this.doctorDataObj.contact=this.formValue.value.contact;
    this.doctorDataObj.address=this.formValue.value.address;

    this.doctordataService.postDocData(this.doctorDataObj).subscribe((res)=>{
      console.log(res);
        alert('Doctor Info Added Successfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllDoctor();
    },
    (err) => {
      alert('Error!');
    }
  );
  }

  //show all doctor info in the table
  getAllDoctor() {
    this.doctordataService.getDoctorData().subscribe((res) => {
      this.doctorData= res;
    });
  }

  //method to call on fields and later to update
  onEdit(item: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.doctorDataObj.id = item.id;
    this.formValue.controls['docName'].setValue(item.name);
    this.formValue.controls['sex'].setValue(item.sex);
    this.formValue.controls['department'].setValue(item.department);
    this.formValue.controls['availability'].setValue(item.availability);
    this.formValue.controls['contact'].setValue(item.contact);
    this.formValue.controls['address'].setValue(item.address);
  }

  updateDoctorDetails() {
    this.doctorDataObj.name = this.formValue.value.docName;
    this.doctorDataObj.sex = this.formValue.value.sex;
    this.doctorDataObj.department = this.formValue.value.department;
    this.doctorDataObj.availability = this.formValue.value.availability;
    this.doctorDataObj.contact = this.formValue.value.contact;
    this.doctorDataObj.address = this.formValue.value.address;

    this.doctordataService.updateDoctor(this.doctorDataObj, this.doctorDataObj.id)
      .subscribe((res) => {
        console.log(res);
        alert('Updated Doctor Details!');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllDoctor();
      });
  }

  
  deleteDoctor(id:string) {
    console.log(id);
    this.doctordataService.deleteDoctor(id).subscribe((res) => {
      alert('Doctor data Deleted');
      this.getAllDoctor();
    });
  }


  //for close button
    closeDoctorData(){
      this.router.navigate(['/search'])
    }
  
}
