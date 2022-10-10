import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent 
{

  regiones          : string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC' ]; // REGIONES TOTALES
  regionActiva      : string = ''; //REGION QUE SE ESTA UTILIZANDO
  paisesObtenidos : Country[] = []; //
 
  constructor( private PaisService: PaisService ) { } // Inyeccion de servicios

  getClaseCSS( region: string ): string
  {

    return ( ( region === this.regionActiva ) 
    ? 'btn btn-primary'
    : 'btn btn-outline-primary' );

  } // LA APLICION DE ESTILOS CON UNA PRUEBA LOGICA
  
  activarRegion( region : string )
  {
    this.regionActiva = region;
    this.buscarRegion()

  } // SE ALMACENA LA REGION UTILIZADA Y DESPUES EJECUTA LA BUSQUEDA

  buscarRegion()
  {

    this.PaisService.getRegion( this.regionActiva )
    .subscribe( (paises : Country[])  =>
    {
      this.paisesObtenidos = paises;
    });

  } // METODO PARA EJECUTAR LA BUSQUEDA

}
