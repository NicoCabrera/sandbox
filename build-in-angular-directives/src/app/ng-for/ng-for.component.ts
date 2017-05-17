import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  numbers:Array<number> = [1,2,3,4,5,6,7,8,9,10];
  constructor() { 
  }

  ngOnInit() {
  }

}
