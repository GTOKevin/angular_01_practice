import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`<h1>{{title}}</h1>
    <h3>La base es : <strong> {{base}} </strong></h3>
    <button (click)="acumular(base)"> + 5</button>
    
    <span> {{numero}} </span>
    
    
    <button (click)="acumular(-base)"> - 5</button>`
})

export class ContadorComponent{
    
  title:string = 'Contador APP';
  numero:number = 0;
  base:number =5;


  acumular(valor:number){
    if(valor<0 && this.numero==0){

    }else{
      
    this.numero+=valor;
    }
  }

}