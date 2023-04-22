import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/services/auth.service';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name : string = '';
  email : string = '';
  password : string  = '';
     constructor(private auth : AuthService){}
     ngOnInit(): void{

     }
     login(){
      if(this.email == ''){
        alert('Enter the email Id');
        return;
      }
      if(this.password ==''){
        alert('Enter the password');
        return;
      }
      this.auth.login(this.name,this.email,this.password);
      this.name = '';
      this.email = '';
      this.password = '';
     }
}
