import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title:string = 'Contador APP';
  numero:number = 0;
  base:number =5;


  acumular(valor:number){
    if(valor<0 && this.numero==0){

    }else{
      
    this.numero+=valor;
    }
  }


  // restar(){
  //   if(this.numero>0){  
  //   this.numero-=1;
  //   }
  // }
}
