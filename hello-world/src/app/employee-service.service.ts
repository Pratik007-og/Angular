import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Iemployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable(
  {
    providedIn:'root'
  }
)
export class EmployeeServiceService {
  private _url: string = "/assets/data/employee.json";
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Iemployee[]>{
    return this.http.get<Iemployee[]>(this._url)
                    .pipe(catchError(this.errorHandler));

  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
 
