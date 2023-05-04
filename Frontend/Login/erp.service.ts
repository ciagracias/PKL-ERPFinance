import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ErpService {
  apiServer: string = 'http://192.168.1.13:9001/';
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
  ids: any;
  constructor(private http: HttpClient) { }


  get() {
    return this.http.get(this.apiServer + "get");
  }

  add(data: any): Observable<any> {
    let API_URL = this.apiServer + "add";
    return this.http.post(API_URL, data, { headers: this.headers }).pipe(catchError(this.error));
  }
  login(data: any): Observable<any> {
    let API_URL = this.apiServer + "login";
    return this.http.post(API_URL, data, { headers: this.headers }).pipe(catchError(this.error));
  }
  // http://192.168.1.13:9001/login



  update(data: any): Observable<any> {
    let API_URL = this.apiServer + "update";
    return this.http
      .put(API_URL, data, { headers: this.headers })
      .pipe(catchError(this.error));
  }

  delete(id: any): Observable<any> {
    var API_URL = this.apiServer + "delete?id=" + id;
    return this.http.delete(API_URL).pipe(catchError(this.error));
  }

  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }



}