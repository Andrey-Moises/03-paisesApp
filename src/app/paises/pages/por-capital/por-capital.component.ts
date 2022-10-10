import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  constructor( private paisService: PaisService ) { } // INYECCION DE SERVICIOS

  capital            : string    = "";     // LA BUSQUEDA QUE SE REALIZARA
  errorFound         : boolean   = false;  // INDICADOR DE QUE SI EXISTE ALGUN ERROR
  capitalesObtenidos : Country[] = [];     // ARREGLO DONDE SE ALMACENARAN LAS CAPITALES
  

  buscarCapital( capital: string ) // SI ENCUENTRA RESULTADOS LOS GUARDARA SI NO, MANDA ERROR
  {

    this.errorFound = false;

    this.paisService.buscarCapital( capital )
    .subscribe( ( capitales : Country[] )  =>
    {

      this.capitalesObtenidos = capitales;
      // console.log(this.paisService)

    }, (error) => 
    {
      
      this.errorFound = true;
      this.capitalesObtenidos = [];

    })
    // console.log(this.capitalesObtenidos);
  }

  sugerencias( capital:string )
  {

    this.errorFound = false;
    // console.log(capital)

  }

}
