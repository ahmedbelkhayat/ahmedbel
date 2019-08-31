import { Injectable } from '@angular/core';
import { Picture } from './picture';
import {PICTURES} from './mockPictures';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  constructor() { }

  getPictrures(): Observable<Picture[]> {
    return of(PICTURES)
    .pipe(catchError(this.handleError('getPicturesByCategory()', [])));
  }
  getPicturesByCateroy(category:string){
    return of(PICTURES.filter(picture => picture.categorie.includes(category)))
    .pipe(catchError(this.handleError('getPicturesByCategory()', []))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}



}
