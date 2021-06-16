import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-test',
  template:`<input [(ngModel)]="name" (ngModelChange)="onChange($event)" type="text">
            {{name}}
             `,
  styles: []             
})
export class TestComponent implements OnInit {
  public name = "";
  //public siteUrl = window.location.href;
  
 
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "Hello " + this.name
  }
  onChange(value){
    console.log(value)
    //this.greeting="Welcome to codeEvolution"
    //this.greeting=event.type;
  }

}
