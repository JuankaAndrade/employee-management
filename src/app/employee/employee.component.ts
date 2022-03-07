import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:string[] | any;
   
  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  }

handleSuccessfulResponse(response:any)
{
    this.employees=response;
}

deleteEmployee(employee: any): void {
  this.httpClientService.deleteEmployee(employee)
    .subscribe( data => {
      this.employees = this.employees.filter((u: any) => u !== employee);
    })
};

letEmployee(employee: any): void {
  this.httpClientService.deleteEmployee(employee)
    .subscribe( data => {
      this.employees = this.employees.filter((u: any) => u !== employee);
    })
};

/*editEmployee(employee: any): void {
  this.httpClientService.editEmployee(employee)
    .subscribe( data => {
      this.employees = this.employees.filter((u: any) => u !== employee);
    })
};*/

}
