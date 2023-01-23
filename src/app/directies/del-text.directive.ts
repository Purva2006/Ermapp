import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDelText]'
})
export class DelTextDirective {

  constructor(element:ElementRef)
  
  {
    element.nativeElement.style.color="red"
   element.nativeElement.style.textDecoration="lingthrough"
  //  element.nativeElement.style.backgroundColor="yellow"

   }

}

//above directive is used to delete the text of specified element of DOM
