import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Item} from '../../_models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Item[]> {
    return this.http.get<{ data: Item[] }>(`${environment.apiUrl}/api/item`).pipe(
      map((res) => {
        return res.data;
      }),
      catchError(this.handleError)
    );
  }

  public createOne(item) {
    return this.http.post<{ data: Item }>(`${environment.apiUrl}/api/item`, item).pipe(
      map((res) => {
        return res.data;
      }),
      catchError(this.handleError)
    );
  }

  public updateOne(item) {
    return this.http.put<{ data: Item }>(`${environment.apiUrl}/api/item/${item._id}`, item).pipe(
      map((res) => {
        return res.data;
      }),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
