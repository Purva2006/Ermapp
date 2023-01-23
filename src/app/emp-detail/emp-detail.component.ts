import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee.model';
import { EmpService } from '../services/emp.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent {

  /*
     to Fetch some data from tha URL Angular provide one built-in service
     which ActivatedRoute

     --> ActivateRoute is built-in service of RouterModule which retrive 
          the data from URL bar

    --> we need to inject that service  into current usign constructor

    --> declare object as private to access it outside a constructor
  */




    empId!:number
    emp!:Employee

//Dependancy Injection
    constructor(private route:ActivatedRoute, private empservice:EmpService) {}

    ngOnInit(): void{
      let id = this.route.snapshot.paramMap.get('id')!

      if(id!=null)
      {
        this.empId = eval(id)
        this.emp = this.empservice.get(this.empId)!
      }

    }
    

}
