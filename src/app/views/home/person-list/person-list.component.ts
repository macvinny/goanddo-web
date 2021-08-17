import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Person } from 'src/app/person/person';
import { PersonService } from 'src/app/person/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  public persons!: Person[];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.getPersons();
  }

  public getPersons(): void {
    this.personService.getPersons().subscribe(
      (response: Person[]) => {
        this.persons = response;
        console.log(this.persons);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
