import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Patientdata } from './patientdata.model';

@Injectable({
  providedIn: 'root',
})
export class PatientdataService {
  patientUrl: string = 'http://localhost:3000/patientData';

  constructor(private httpClient: HttpClient) {}

  //save patient data
  postPatientData(data: any) {
    return this.httpClient.post<any>(this.patientUrl, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  //update existing data
  updatePatientData(data: any, id: string) {
    return this.httpClient.put<any>(this.patientUrl +'/'+ id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  //show all data
  getPatientData(): Observable<Patientdata[]> {
    return this.httpClient.get<Patientdata[]>(this.patientUrl);
  }

  //getSingle row by calling id
  getSinglePatientData(id: string): Observable<Patientdata> {
    return this.httpClient.get<Patientdata>(this.patientUrl + '/' + id);
  }

  //delete single row by calling id
  deleteSinglePatientData(id: string): Observable<Patientdata> {
    return this.httpClient.delete<Patientdata>(this.patientUrl + '/' + id);
  }

}
