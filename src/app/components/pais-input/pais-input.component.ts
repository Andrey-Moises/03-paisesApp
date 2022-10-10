import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})

export class PaisInputComponent implements OnInit{
  
  ngOnInit(): void 
  {

    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit( valor );
    });

  }

  @Output() onEnter    : EventEmitter<string>= new EventEmitter(); // Emitir eventos
  @Output() onDebounce : EventEmitter<string> = new EventEmitter; // Emitir eventos
  
  @Input() placeholder : string = '';                             //Recibir valores

  debouncer: Subject<string> = new Subject();
  termino :string = '';
  

  buscar()
  {

    this.onEnter.emit( this.termino )

  }

  teclaPresionada(){
    
    this.debouncer.next( this.termino );

  }

}
