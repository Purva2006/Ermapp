import { Component } from '@angular/core';
import { reduce } from 'rxjs';
import {Employee} from "../employee.model"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

 

  mystyle={
    // 'color':'red',
    // 'text-align':'center',
    'font-weight':'bold'
  }

  myclasses = {
    'fs-2':false,
    // 'text-info':true,
    // 'fst-italic':true
  }

  emplist:Employee[] = [
    {
      "empId":101,
      "empName":"Poonam Dhokare",
      "empSalary":400000,
      "empDOB":new Date(1999,5,20),
      "empImage":"https://cdn-icons-png.flaticon.com/512/554/554857.png",
      "empDept":"HR"
    },

    {
      "empId":102,
      "empName":"Priyanka Neman",
      "empSalary":300000,
      "empDOB":new Date(1994,10,10), 
      "empImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYWNvNfQpXVQOUFKDfuMmVhGyW4ZVZqhogzX4qodxw2g1_XxcnkVQZUh6VshLYZiW7fZA&usqp=CAU",
      "empDept":"Admin"


    },

    {
      "empId":103,
      "empName":"Seeta Pal",
      "empSalary":600000,
      "empDOB":new Date(2000,0,28),
      "empImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzjeRqiPhlTDNYnkllmYATnR9c1LPf1tTFA&usqp=CAU",
      "empDept":"Software Developer"


    },

    {
      "empId":104,
      "empName":"Karishma mungekar",
      "empSalary":200000,
      "empDOB":new Date(1999,24,10),
      "empImage":"https://cdn-icons-png.flaticon.com/512/714/714928.png",
      "empDept":"Software Developer"



    },

    {
      "empId":104,
      "empName":"Rushikesh Ghadi",
      "empSalary":0,
      "empDOB":new Date(2000,8,2),
      "empImage":"https://cdn-icons-png.flaticon.com/512/1869/1869679.png",
      "empDept":"Software Developer"


    },

  ]

  show(emp:Employee){

    alert(`Employee Detail
    ID:-${emp.empId}
    Name:-${emp.empName}
    Salary:-${emp.empSalary}
    
    `)

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

  constructor()
  {}
    ngOnInit(): void{
      this.filteremplist=this.emplist
    }
  

}
