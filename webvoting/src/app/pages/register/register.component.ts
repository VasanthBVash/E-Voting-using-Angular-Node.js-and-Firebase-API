import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/services/auth.service';
import {AngularFireAuth} from '@angular/fire/compat/auth';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name : string = '';
  email : string = '';
  password : string  = '';
  constructor(private auth : AuthService){}
  ngOnInit(): void {
  }
  register(){
    if(this.email == ''){
      alert('Enter the email Id');
      return;
    }
    if(this.password ==''){
      alert('Enter the password');
      return;
    }
    this.auth.register(this.name,this.email,this.password);
    this.name = '';
    this.email = '';
    this.password = '';
   }

}
