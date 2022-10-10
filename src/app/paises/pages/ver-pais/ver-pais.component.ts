import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from 'rxjs';
import { Idd } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  constructor( 
    private cambiosRuta : ActivatedRoute,
    private PaisService : PaisService
    ){ }

  ngOnInit(): void 
  {

    this.cambiosRuta.params
    .pipe
    (
      switchMap( ( {id} ) => this.PaisService.getPaisPorCodigo( id ) )
    )
    .subscribe( pais => 
    {
      console.log( pais );
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
