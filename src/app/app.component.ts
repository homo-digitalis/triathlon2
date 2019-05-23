import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'triathlon';
  newParticipant = ""
  participants: string[] = []

  public constructor(){

  }

  public addParticipant(){
    this.participants.push(this.newParticipant)
    this.newParticipant = ""

  }
}
