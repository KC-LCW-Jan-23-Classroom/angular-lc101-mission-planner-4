import { Component, OnInit } from '@angular/core';

interface candidate {
  name:string;
  photo: string;
}

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: candidate[] = [];
  selectedCandidate: candidate;

  candidates: candidate[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(crewPerson:candidate) {
    this.inCrew = this.crew.includes(crewPerson);
    if (this.inCrew) {
      let personIndex = this.crew.indexOf(crewPerson);
      this.crew.splice(personIndex,1);
    } else if (!this.inCrew && this.crew.length < 3) {
      this.crew.push(crewPerson);
    }
  }
  selected(crewPerson:candidate) {
    this.selectedCandidate = crewPerson
  }

  doesInclude(crewPerson:candidate):boolean {
    if (this.crew.includes(crewPerson)) {
      return true;
    }
    return false;
  }

}
