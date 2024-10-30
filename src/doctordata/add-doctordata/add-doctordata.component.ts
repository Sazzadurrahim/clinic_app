import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Doctordata } from '../doctordata.model';
import { DoctordataService } from '../doctordata.service';

@Component({
  selector: 'app-add-doctordata',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './add-doctordata.component.html',
  styleUrl: './add-doctordata.component.css'
})
export class AddDoctordataComponent {

  


}
