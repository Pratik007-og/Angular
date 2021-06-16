import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
              <h2>{{name | lowercase}}</h2>
              <h2>{{name | uppercase}}</h2>
              <h2>{{name | titlecase}}</h2>
              <h2>{{name | slice:3:6}}</h2>
              <h2>{{person | json}}</h2>

              <h2>{{5.678 | number:'1.2-3'}}</h2>
              <h2>{{5.678 | number:'2.1-2'}}</h2>

              <h2>{{0.25 | percent }}</h2>
              <h2>{{5.678 | currency}}</h2>
              <h2>{{5.678 | currency:'ISD':'code'}}</h2>
              
              <h2>{{ date }}</h2>
              <h2>{{ date | date:'shortDate'}}</h2>
              <h2>{{ date | date:'shortTime'}}</h2>
              <h2>{{ date | date:'mediumDate'}}</h2>
              <h2>{{ date | date:'mediumTime'}}</h2>
              
              `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() public parentData;//input decorator
  public name = "Pratik";
  public person = {
    name:"Aryaman",
    age: 20
  }
  public date = new Date();
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.childEvent.emit("Hey CodeEvolution")
  }

}
