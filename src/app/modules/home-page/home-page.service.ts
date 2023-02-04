import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  private _url = environment.app_url;
  constructor(
    private _http: HttpClient
  ) { }

  getFeeds(): Observable<Object> {
    return this._http.get(this._url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMsg = '';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMsg = 'An error occurred:', error.error;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMsg = "Backend returned code body was: " + error.error;
    }
    errorMsg = 'Something bad happened; please try again later.';
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(errorMsg));
  }
}
