import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, FormsModule, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userName!:string;
  password!:string;

  targetName1:string="operator1"
  targetPass1:string="1234"

  targetName2:string="operator2"
  targetPass2:string="1122"

  constructor(private router:Router){}

  onLogin(){
    if(this.userName==this.targetName1 && this.password==this.targetPass1 || 
      this.userName==this.targetName2 && this.password==this.targetPass2){
      this.router.navigate(['search']);
    }
    else{
      alert('Invalid Credentials');
    }
  }

}
