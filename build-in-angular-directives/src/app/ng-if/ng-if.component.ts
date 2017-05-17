import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  hide:boolean;
  data:string;
  constructor() {
    this.hide = false;
    this.data = "";
   }

  ngOnInit() {
    
  }

  clickMe(){
    this.hide = !this.hide;
  }

  clickIfElse(){
    this.data = "Ahora tengo datos";
  }

}
