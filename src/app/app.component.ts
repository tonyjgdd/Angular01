import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //declaracion e inicializacion de variables
  nombre = 'Tony Josue ';
  apellidos='Gutierrez Dongo';
  sueldos=[1250,1550,1225];
  activo=true;
  edad=10;
  descuento_total=0.30;
  contador=0;



  //metodos
  incrementar(){
    this.contador++;
  }
  disminuir(){
    this.contador--;

  }


  calculardescuento(){
    let descuento=0;
    descuento=this.descuento_total*this.SumaSueldo();
    return descuento;
  }

  esActivo(){
    if(this.activo)
    {
      return 'trabajador activo';
    }
    else 
    return 'trabajador inactivo';
  }
  SumaSueldo(){
    
    let suma=0;
    for (let i =0;i<this.sueldos.length;i++)
      suma+=this.sueldos[i];
      return suma;
      
}
}
