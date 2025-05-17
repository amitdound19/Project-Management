import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ProjectlistComponent } from '../projectlist/projectlist.component';
import { LoginService } from '../login/login.service';
import { ProjectDetails } from './saveproject.dto';

@Injectable({
  providedIn: 'root'
})
export class SaveprojectService {

  projectdetails:ProjectDetails[]=[];

  url:string='http://localhost:8082/projectdetail/'

  constructor(private http:HttpClient) { }

  public saveproject(pd:ProjectDetails):Observable<any>{
    return this.http.post<any>(this.url+"saveproject",pd).pipe(
      catchError(this.errorHandler)
    )
  }

  public getprojectlist():Observable<any>{
    return this.http.get<any>(this.url+"getprojectlist").pipe(
      catchError(this.errorHandler)
    )
  }

  public updateStatus(id:number , newStatus:string):Observable<any>{
    return this.http.put<any>(this.url+"changestatus/"+id+"?status="+newStatus,null).pipe(
      catchError(this.errorHandler)
    )
  }

  public countStatus():Observable<{Running: number; Closed: number; Cancelled: number; Registered:number}>{
    return this.http.get<{Running: number; Closed: number; Cancelled: number; Registered:number}>(this.url+"statuscount").pipe(
      catchError(this.errorHandler)
    )
  }

  public searchProjectsByName(pname: string):Observable<any>{
    return this.http.get<any>(this.url+"searchlist").pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => new Error(errorMessage));
 }
}
