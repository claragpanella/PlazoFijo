import { FormBuilder } from "@angular/forms";

// export class Simulacion{
//     public capital: number;
//     public dias: number;
//     public interes: number;
//     public tasa: number;

//     constructor(capital: number, dias:number, tasa:number){
//         this.capital = capital;
//         this.dias = dias;
//         this.tasa = tasa;
//         this.interes = 0;
//     }

//     calcularInteres(): number{
//         this.interes = (this.capital + this.dias + this.tasa) / 36500;
//         return this.interes
//     }
// }

export class Simulacion{
    public capital: number;
    public dias: number;
    public tasa: number;
    public interes: number;

    constructor(capital: number, dias: number, tasa: number){
        this.capital = capital;
        this.dias = dias;
        this.tasa = tasa;
        this.interes = 0;
    }

    calcularInteres(): number {
        this.interes = (this.capital * this.dias * this.tasa)/36500;
        return this.interes;
    }

    ejemploPromesa(estadoConexionDB: boolean): void{
        const miPromesa = new Promise( (resolve, reject) => {
            if(estadoConexionDB){
                resolve('Conexión DB exitosa!.. ;) ');
            }else{
                reject('Conexion DB fallida!.. :( ');
            }
    
        }); 
    
        miPromesa.then( (mensaje) => {
            console.log(mensaje); 
        }).catch(mensaje => {
            console.log(mensaje);
        });
    }
}