import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value:Date):string {
    let birthyear:number=value.getFullYear()
    let currentyear:number=new Date().getFullYear()
    let age:number = currentyear -birthyear

  return `${age} year`
  }

}
