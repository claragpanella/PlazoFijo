import { Simulacion } from "./simulacion.models";

export class PlazoFijo{
    simulacion: Simulacion;
    vencimiento: Date;
    constitucion: Date;

    constructor(simulacion: Simulacion, constitucion: Date){
        this.simulacion = simulacion;
        this.constitucion = constitucion;
        this.vencimiento = this.calcularVto(this.simulacion.dias, constitucion);
    }

    calcularVto(dias: number, constitucion: Date): Date{
        return new Date(); // modifcar para calcular vencimiento
    }
}