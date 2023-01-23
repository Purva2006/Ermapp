import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  template: '<h2> <i class="bi bi-people"></i>{{title}}</h2>',
  styleUrls: []
})
export class TitleComponent {
  title:string="ERMS-App"

}
