import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'employee-list',
  template: `
              <h2>Employee List:</h2>
              <ul *ngFor="let employee of employees">
                <li>{{employee.name}}</li>
              </ul>
              {{errorMsg}}
              `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
  public employees=[];
  public errorMsg;
  constructor(private _employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
          .subscribe(data => this.employees = data,
                      error => this.errorMsg = error);
  }

}
