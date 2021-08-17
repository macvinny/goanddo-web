import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Institution } from 'src/app/institution/institution';
import { InstitutionService } from 'src/app/institution/institution.service';

@Component({
  selector: 'app-institution-list',
  templateUrl: './institution-list.component.html',
  styleUrls: ['./institution-list.component.css']
})
export class InstitutionListComponent implements OnInit {
  public institutions!: Institution[];

  constructor(private institutionService: InstitutionService) {}

  ngOnInit(): void {
    this.getInstitutions();
  }

  public getInstitutions(): void {
    this.institutionService.getInstitutions().subscribe(
      (response: Institution[]) => {
        this.institutions = response;
        console.log(this.institutions);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
