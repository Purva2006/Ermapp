import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmpService } from '../services/emp.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent {
 
  emp:Employee = new Employee()
  //here we create one empty object of class.
  //we need this object TDF can implicity bind data into that above.

  constructor(private route:ActivatedRoute, private empservice:EmpService, 
    private router:Router) { }

  ngOnInit():void{
    let id:number = eval(this.route.snapshot.paramMap.get('id')!)
    if(id!=null)
    {
      this.emp=this.empservice.get(id)!
    }
  }

  onSave()
  {
    console.log(this.emp)
    this.empservice.save(this.emp)
    this.router.navigate(['/list'])
  }






}