import { Component, OnInit } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';


 

@Component({
  selector: 'app-conexion',
  templateUrl: './conexion.component.html',
  styleUrls: ['./conexion.component.css']
})
export class ConexionComponent implements OnInit {
  internetStatus = '';

  constructor() {    
    }

  ngOnInit(): void {
    this.conexion();
  }

  private conexion(){
    console.log('estado conexion');
    fromEvent(window, 'offline').pipe(
      debounceTime(100)).subscribe((event: Event) =>{
        console.log(event);
        this.internetStatus = event.type;
      });
    fromEvent(window, 'online').pipe(
      debounceTime(100)).subscribe((event: Event) =>{
        console.log(event);
        this.internetStatus = event.type;
      });
  }

}