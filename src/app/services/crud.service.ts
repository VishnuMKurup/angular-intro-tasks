import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  updateUrl= 'https://reqres.in/api/users/2';
  usersUrl = 'https://reqres.in/api/users';
  countryStateListUrl = ' https://pod2-dlp.fayastage.com:7004/api/m/country_state_list';

  constructor(private http: HttpClient) { }

  getData() {//get country and state list from countryStateList Url
    return this.http.get(this.countryStateListUrl).pipe(
      catchError(this.handleError)
    );
  }

  postData(data) {// post data to usersUrl
    return this.http.post(this.usersUrl,data).pipe(
      catchError(this.handleError)
    );
  }

  editData(data){// update data
    return this.http.put(this.updateUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened. Please try again later.');
  }
}
