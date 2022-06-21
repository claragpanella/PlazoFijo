import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: any;
  @Input() mensaje = '';
  @Output() messageEvent = new EventEmitter<string>();
  ruta = '';

  constructor(private route: Router) { }

  navegar(index: string){
    this.ruta = index;
    console.log('click');
    this.route.navigateByUrl(`/${index}`);
    this.closeAddExpenseModal.nativeElement.click();
    this.messageEvent.emit(index);
  }

  ngOnInit(): void {
  }

}
