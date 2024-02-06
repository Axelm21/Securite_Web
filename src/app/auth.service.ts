// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  signup(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user)
      .pipe(
        catchError((error: any) => {
          // Gère l'erreur ici (peut être simplement console.log)
          console.error(error);
          return throwError(error);
        })
      );
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials)
      .pipe(
        catchError((error: any) => {
          // Gère l'erreur ici (peut être simplement console.log)
          console.error(error);
          return throwError(error);
        })
      );
  }

}
