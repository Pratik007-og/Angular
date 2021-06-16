import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from "@angular/router";//used to extract the id from the parameter
import { DepartmentListComponent } from '../department-list/department-list.component';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You Selected Id: {{deptId}}</h3>
    <p>
      <button (click)="gotoOverview()">Overview</button>
      <button (click)="gotoContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    <p>
    <button (click)="GoPrevious()">Previous</button>
    <button (click)="GoNext()">Next</button>
    </p>
    <button (click)="gotoDepartments()">Back</button>
    
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public deptId;
  deptList: DepartmentListComponent;
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //use snapshot of the current route and take the id from the parameter
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.deptId = id;
    })
    
  }
  GoPrevious(){
    let previd=this.deptId - 1;
    if(previd === 0)
      previd = 5;
    //this.router.navigate(['/departments',previd]);
    this.router.navigate(['../',previd],{relativeTo: this.route});
    //this.deptId = previd;
  }
  GoNext(){
    let nextid=this.deptId + 1;
    if(nextid === 6){
      nextid = 1;
    }
    this.router.navigate(['../',nextid],{relativeTo: this.route});
    //this.deptId=nextid;
  }
  gotoDepartments(){
    let sid = this.deptId;
    //this.router.navigate(['/departments',{id: sid}]);//id is the optional route parameters in the link parameters array
    this.router.navigate(['../',{id: sid}],{relativeTo: this.route});
    //go back one segment in the url.ex: if url is department-list/1, go back to department-list
  }
  gotoOverview(){
    this.router.navigate(['overview'],{relativeTo: this.route});
  }
  gotoContact(){
    this.router.navigate(['contact'],{relativeTo: this.route});
  }

}
