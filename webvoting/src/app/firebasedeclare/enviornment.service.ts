import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviornmentService {

  constructor() { }
}
export const enviornment = {
  production: false,
  firebase : {
  apiKey: "AIzaSyBuVHna0FoEcHILgD-dnwa534-JNqUUS8U",
  authDomain: "evoting-97062.firebaseapp.com",
  projectId: "evoting-97062",
  storageBucket: "evoting-97062.appspot.com",
  messagingSenderId: "514924269227",
  appId: "1:514924269227:web:bd71d4af612229261eb1ee",
  measurementId: "G-BERXL72L8S"
  }
};

