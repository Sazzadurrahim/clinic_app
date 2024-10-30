import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { PatientdataService } from '../patientdata/patientdata.service';
import { Patientdata } from '../patientdata/patientdata.model';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterOutlet,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
//declare local array to get data from json
dataArray:any[]=[]
  
  //form value
  pName:string = '';
  pContact:string = '';

  //set variable to keep the return pName & pContact
  jointInfo:Patientdata[] = [];

  constructor( private patientdataService: PatientdataService,
              private router:Router,
              ){}

  onSearch() {
     //setting value for declared local array
     this.patientdataService.getPatientData().subscribe((data)=>{
      this.dataArray=data;
       //setting value for var jointInfo
    this.jointInfo = this.dataArray.filter(x => (x.fullName == this.pName) &&
     (x.contact == this.pContact));
     this.pName=''
     this.pContact=''
    
     // Check if jointInfo is empty
     if (this.jointInfo.length === 0) {
      // Navigate to the register component
      this.router.navigate(['/register']); 
    }

    });
  }
    //---- onSearch() is completed----------------------

    //----------method for Edit button---------------
    onEdit(id: string){
      console.log(id);
      this.router.navigate(['updateForm', id]);
    
    }

    //method for delete operation----------------
    onDelete(id:string){
      console.log(id);
      this.patientdataService.deleteSinglePatientData(id).subscribe((data)=>{});
      alert("Deleted data successfully.")
      //to empty the table after deleting the row.
      this.jointInfo.length=0; 
    }

    //method for Patient show button-------------------
    showAllData(){
      this.router.navigate(['/showdata']);
    }

    // method for logout button
    logout(){
      this.router.navigate([''])
    }

}
