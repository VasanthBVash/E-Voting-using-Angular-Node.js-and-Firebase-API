import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public auth:AuthService){ }

  ngOnInit(): void{
    
  }

}
