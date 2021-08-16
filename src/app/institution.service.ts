import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Institution } from './institution';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class InstitutionService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getInstitutions(): Observable<Institution[]> {
    return this.http.get<Institution[]>(`${this.apiServerUrl}/institution/all`);
  }

  public addInstitution(institution: Institution): Observable<Institution> {
    return this.http.post<Institution>(`${this.apiServerUrl}/institution/add`, institution);
  }

  public updateInstitution(institution: Institution): Observable<Institution> {
    return this.http.put<Institution>(`${this.apiServerUrl}/institution/update`, institution);
  }

  public deleteInstitution(institutionId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/institution/delete/${institutionId}`);
  }
}
