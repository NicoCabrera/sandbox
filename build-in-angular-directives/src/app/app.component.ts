import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  hidden:boolean;
  unknow:any;
  numbers:number[];

  constructor() {
    this.hidden=false;
    // this.unknow = "knowed!";    <----------------- El modelo sigue siendo 'undefined'. Por lo que no se mostrará
    this.numbers = [1,2,3,4,5,6,7,8,9,10];
  }



  changeValue(){
    this.hidden = !this.hidden;
  }
}




