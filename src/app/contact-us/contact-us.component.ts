import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpService } from '../services/emp.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  
  
  constructor(private route:ActivatedRoute, private empservice:EmpService, 
    private router:Router) { }


  onSave()
  {
   
    this.router.navigate(['/contactus'])
  }



}
