import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

   // INYECCION DEL SERVICIO
  
   constructor( private paisService: PaisService ) {}

   // VARIABLES
   
   termino: string = "";
   errorFound: boolean = false;
   paisesObtenidos:Country[] = [];
 
   // 
 
   buscar( termino: string )
   {
     this.errorFound = false;
     console.log( termino );
     
     this.paisService.buscarPais( termino )
     .subscribe( ( paises : Country[] ) => 
     {
 
       this.paisesObtenidos = paises
      //  console.log(this.paisesObtenidos)
 
     }, (err) => {
       this.errorFound = true;
       this.paisesObtenidos = [];
     });

     
     
   }

   sugerencias( termino:string )
     {
      
      this.errorFound = false;
      // console.log(termino);

     }
  
}
