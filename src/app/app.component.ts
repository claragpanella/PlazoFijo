import { AfterContentInit, Component, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { SimuladoresService } from './providers/simuladores.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Hola a Todos!';
  index = 'Simulador';

  constructor(){

  }

  receiveMessage($event: any){
    this.index = $event;
  }
}