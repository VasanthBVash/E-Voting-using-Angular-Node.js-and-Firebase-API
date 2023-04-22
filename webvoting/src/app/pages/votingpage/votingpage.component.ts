import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-votingpage',
  templateUrl: './votingpage.component.html',
  styleUrls: ['./votingpage.component.css']
})
export class VotingpageComponent {
  buttonDisabled = false;
  buttonLabel = 'Vote !';
  clickCount = 0;

  onButtonClick() {
    this.clickCount++;
    this.buttonDisabled = true;
    this.buttonLabel = `Voted`;

    alert("Successfully voted: Thanks for voting"); 
  }
 
}

