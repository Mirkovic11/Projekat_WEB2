import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  nubmerOfTeam: string[] = ['Team1', 'Team2', 'Team3', 'Team4', 'Team5'];

  constructor() { }

  ngOnInit(): void {
  }

}
