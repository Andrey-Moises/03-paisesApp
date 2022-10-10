import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient){ }

  getHttpParams ()
  {
    return new HttpParams().set( 'fields', 'name,capital,alpha2Code,tr,flag,population' )
  }

  buscarPais( termino: string ): Observable<Country[]> 
  {
    
    // if ( termino == '' ) {
    //   return;
    // }

    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url, {params:  this.getHttpParams() } );
    
    // .pipe(
    //   catchError( err => of() )
    // );

  }

  buscarCapital( termino: string ): Observable<Country[]> 
  {

    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url, { params:  this.getHttpParams() } );

  }

  getPaisPorCodigo( id : string )
  {
    
    const url = `${ this.apiUrl }/alpha/${ id }`; 
    return this.http.get<Country>( url, { params:  this.getHttpParams() } );
  
  }

  getRegion( region : string ):Observable<Country[]>
  {

    const url = `${ this.apiUrl }/regionalbloc/${region}?`;
    return this.http.get<Country[]>( url, { params:  this.getHttpParams() } );

  }


}
