import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <div *ngIf="dispName; then thenBlock; else elseBlock"></div>
            <ng-template #thenBlock>
              <h2>Pratik Patnaik</h2>
            </ng-template>

            <ng-template #elseBlock>
              <h2>Hidden</h2>
            </ng-template>

            <div [ngSwitch]="color">
              <div *ngSwitchCase="'red'">You picked Red</div>
              <div *ngSwitchCase="'blue'">You picked Blue</div>
              <div *ngSwitchCase="'green'">You picked Green</div>
              <div *ngSwitchDefault>Pick Again</div>
            </div>

            <div *ngFor="let color of colors; odd as o">
              <h2>{{o}} {{color}}</h2>
            </div>
            
            `,
  styleUrls: []
})
export class TestComponent implements OnInit {
  public dispName=true;
  public color="yllow";
  public colors=["red","blue","green","yellow"];
  constructor() { }

  ngOnInit(): void {
  }

}
