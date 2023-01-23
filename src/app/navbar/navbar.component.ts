import { Component } from '@angular/core';
import { EmpService } from '../services/emp.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent 

{

  constructor(private empservice:EmpService)
  {
    console.log("I am Navbar Constrctor.")
  }

}
