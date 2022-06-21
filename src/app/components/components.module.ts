import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { PlazoFijoComponent } from './plazo-fijo/plazo-fijo.component';
import { MenuComponent } from './menu/menu.component';
import { SaldoComponent } from './saldo/saldo.component';
import { CrearPlazoFijoComponent } from './crear-plazo-fijo/crear-plazo-fijo.component';


@NgModule({
    declarations: [
        PlazoFijoComponent,
        MenuComponent,
        SaldoComponent,
        CrearPlazoFijoComponent
    ],
    imports: [
        CommonModule,
    ],

    exports: [
        PlazoFijoComponent, 
        MenuComponent,
        SaldoComponent,
        CrearPlazoFijoComponent
    ]
})

export class ComponentsModule{}