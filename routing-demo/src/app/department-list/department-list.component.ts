import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from "@angular/router";//to navigate to the required url 

@Component({
  selector: 'app-department-list',
  template: `
    <h2>Department list:</h2>
    <ul class="items">
      <li (click)="onSelect(dept)" [class.selected]="isSelected(dept)" *ngFor="let dept of departments">
        <span class="badge">{{dept.id}}</span> {{dept.name}}
      </li>
     
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  public selectedId;
  public departments = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Node"},
    {"id":3, "name":"MongoDB"},
    {"id":4, "name":"Ruby"},
    {"id":5, "name":"Bootstrap"},
  ]
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id= parseInt(params.get('id'));
      this.selectedId = id;
    });
  }
  onSelect(department){
    //this.router.navigate(['/departments', department.id])
    this.router.navigate([department.id],{relativeTo:this.route});
    //idc what the url is right now, but to the current route append the department id and navigate to that url 
  }
  isSelected(department){
    return department.id===this.selectedId;
  }

}
