import { HttpClient } from '@angular/common/http';  
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private fireauth : AngularFireAuth) { }
  login(name : string,email : string,password : string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( () =>{
      localStorage.setItem('token','true');
      this.router.navigate(['dash']);
    }, err =>{
      alert(err.message);
      this.router.navigate(['/log']);
    }
    )
  }
  register(name:string,email:string,password : string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('Successful');
      this.router.navigate(['/log']);
      
    }, err =>{
      alert(err.message);
      this.router.navigate(['/register']);
    }
    )
  }
  logout(){
    this.fireauth.signOut().then(()=> {
      localStorage.removeItem('token');
      this.router.navigate(['/']);
    }, err => {
      alert(err.message);
    }
    )
  }
  isAuthenticated():boolean{
      if(sessionStorage.getItem('token')! == null ){
        return true;
      }
      return false;
  }
}

