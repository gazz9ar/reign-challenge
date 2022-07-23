import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

	private url = environment.url;
  constructor(
	private http: HttpClient,
  ) { }


  public getNews(value:string): Observable<any> {
    return this.http.get<any[]>(`${this.url}/search_by_date?query=${value}`).pipe(
      map((res) => res),
      catchError(this.handleError)
    );
  }

  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
