import { Component } from '@angular/core';
import { Employee } from '../employee.model';
import { EmpService } from '../services/emp.service';


@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent {

  emplist!:Employee[]


 

  displayId(id:number){
    console.log(id)
  }


 constructor(private empservice:EmpService){}

 ngOnInit():void{
  this.emplist= this.empservice.all()
  this.filteremplist = this.emplist
 
 }


 //backup list

 filteremplist!:Employee[]

 _searchQuery!:string

 get searchQuery():string{
   return this._searchQuery
 }

 set searchQuery(searchQuery :string){
    this._searchQuery=searchQuery

    this.filteremplist=this.emplist.filter(emp=>emp.empName.
    startsWith(this._searchQuery))
 }



 //Search employee by department.
 //? is use to make the optional parameters of any function
 searchByDept(dept?:string){
   if(dept!=undefined)
   {
     this.filteremplist=this.emplist.filter(emp=>emp.
       empDept==dept)

   }
 else{
   this.filteremplist=this.emplist
 }
}




 

}
