import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Users } from './login.dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string='http://localhost:8082/users/'

  constructor(private http:HttpClient) {}

  public loginUser(users:Users):Observable<any>{
    return this.http.post<any>(this.url+"loginuser",users).pipe(
      catchError(this.errorHandler)
    )
  }
  
  public getUsers():Observable<any>{
    return this.http.get<any>(this.url+"/getallusers");
    
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
