import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/http-client.service';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  user: Employee = new Employee("","","","","","","");

  addForm = new FormGroup({
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('',Validators.required),
    correo: new FormControl('',Validators.email),
    cedula: new FormControl('',Validators.minLength(10)),

  })
  
  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  createEmployee(): void {
    this.httpClientService.createEmployee(this.user)
        .subscribe( data => {
          alert("Employee created successfully.");
        });

  };

}
