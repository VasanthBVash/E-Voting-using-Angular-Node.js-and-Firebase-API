import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  constructor(private auth:AuthService){}

  ngOnInit(): void{
    
  }

}
