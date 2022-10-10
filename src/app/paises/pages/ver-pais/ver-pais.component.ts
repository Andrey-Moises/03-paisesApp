import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!:Country;

  constructor( 
    private cambiosRuta : ActivatedRoute,
    private PaisService : PaisService
    ){ }

  ngOnInit(): void 
  {

    this.cambiosRuta.params
    .pipe
    (
      switchMap( ( {id} ) => this.PaisService.getPaisPorCodigo( id ) )//,
      //tap( console.log ) //Recibe el producto del observador de arriba y lo imprime
    )
    .subscribe( pais => 
    {
      this.pais = pais;
    }) // FORMA CORTA
  
  //   this.cambiosRuta.params
  //   .subscribe( ({ id }) => { // LA PROPIEDAD SE LLAMA ID (EN app-routing-model)

  //     console.log( id );
  //     this.PaisService.getPaisPorCodigo( id )
  //       .subscribe( pais =>
  //         {

  //           console.log(pais);

  //         });

  //   }); !!!!!!!!! FORMA LARGA !!!!!!!
  
   }

}
