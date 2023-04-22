import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { VotingpageComponent } from './pages/votingpage/votingpage.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

const routes: Routes = [
  {path:'', redirectTo:'log', pathMatch:'full'},
  {path:'log',component:LoginComponent},
  {path:'regs',component:RegisterComponent},
  {path:'cont',component:ContactComponent},
  {path:'dash',component:DashboardComponent},
  {path:'about',component:AboutComponent},
  {path:'vote',component:VotingpageComponent},
  {path: 'terms',component:TermsComponent},
  {path: 'privacy',component:PrivacyComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
