import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Employee{
  constructor(
    public empId:string,
    public nombres:string,
    public designation:string,
    public salary:string,

    public cedula:string,
	  public apellidos:string,
	  public correo:string,

  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }
     getEmployees()
    {

      let username='user'
      let password='password'
    
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.httpClient.get<Employee[]>('http://localhost:8080/employees',{headers});

      /*console.log("test call");
      return this.httpClient.get<Employee[]>('http://localhost:8080/employees');*/
    }

    public deleteEmployee(employee:any) {
      let username='user'
      let password='password'
    
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/"+ employee.empId,{headers});
    }
  
    public createEmployee(employee:any) {
      let username='user'
      let password='password'
    
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.httpClient.post<Employee>("http://localhost:8080/employees", employee,{headers});
    }

    public editEmployee(employee:any) {
      let username='user'
      let password='password'
    
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/editar/"+ employee.empId,{headers});
    }
  
    public agregarEmployee(employee:any) {
      let username='user'
      let password='password'
    
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/agregar/"+ employee.empId,{headers});
    }

    /*public deleteEmployee(employee:any) {
      return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/"+ employee.empId);
    }

    public createEmployee(employee:any) {
      return this.httpClient.post<Employee>("http://localhost:8080/employees", employee);
    }*/

  /*public editEmployee(employee:any) {
    return this.httpClient.get<Employee>("http://localhost:8080/employees" + "/"+ employee.empId);
  }*/
}