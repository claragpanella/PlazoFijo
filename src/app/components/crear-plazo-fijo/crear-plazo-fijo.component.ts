import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Simulacion } from 'src/app/models/simulacion.models';
import { SimuladoresService } from 'src/app/providers/simuladores.service';
@Component({
  selector: 'app-crear-plazo-fijo',
  templateUrl: './crear-plazo-fijo.component.html',
  styleUrls: ['./crear-plazo-fijo.component.css']
})
export class CrearPlazoFijoComponent implements OnInit {

  index: number;
  simulaciones: Simulacion[] = [];
  errordb = false;
  mjeError = '';
  formulario: FormGroup;

  constructor( private ruta: ActivatedRoute, private simuladores: SimuladoresService, private fb: FormBuilder) { 
    this.index = this.ruta.snapshot.params['id'];
    console.log(this.index);
    this.formulario = this.crearFormulario();
    this.simuladores.getBd().then( () =>{
      this.simulaciones = this.simuladores.getSimulaciones();
      console.log(this.simulaciones[this.index]);
      this.setForm();
    }).catch( (err: Error) => {
      this.errordb = true;
      this.mjeError = 'error db!';
    });
  }

  ngOnInit(): void {
  }

  crearFormulario(): FormGroup{
    return this.fb.group({
      dias: ['',[Validators.required, Validators.min(30)]],
      capital: ['', [Validators.required, Validators.min(1000)]]
    });
  }

  setForm(){
    this.formulario.controls['dias'].setValue(this.simulaciones[this.index].dias);
    this.formulario.controls['capital'].setValue(this.simulaciones[this.index].capital);
    console.log(this.formulario);
    this.verificarForm();
  }

  verificarForm(){
    if (this.formulario.invalid){
      alert('Formulario Invalido');
    }
  }

}
