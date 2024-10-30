import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';
import { Doctordata } from './doctordata.model';

@Injectable({
  providedIn: 'root'
})
export class DoctordataService {

  constructor(private httpClient:HttpClient) { }

  docUrl:string="http://localhost:3000/doctorData";
   
  //to save doctor data=====
   postDocData(data: any) {
     return this.httpClient.post<any>(this.docUrl, data).pipe(
       map((res: any) => {
         return res;
       })
     );
   }

   //show all doctor data
  getDoctorData(): Observable<Doctordata[]> {
    return this.httpClient.get<Doctordata[]>(this.docUrl);
  }


  updateDoctor(data: any, id:string) {
    return this.httpClient.put<any>(this.docUrl+'/' + id, data).pipe(
        map((res: any) => {
          return res;
        })
      );
  }



  deleteDoctor(id:string):Observable<Doctordata> {
    return this.httpClient.delete<Doctordata>(this.docUrl+'/'+ id);
  }
}
