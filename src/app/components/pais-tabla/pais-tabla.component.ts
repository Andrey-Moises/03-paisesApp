import { Component, Input } from '@angular/core';

import { Country } from 'src/app/paises/interfaces/pais-interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent 
{
  
  @Input() paisesRes: Country[] = [];
  
  constructor() { }

}
