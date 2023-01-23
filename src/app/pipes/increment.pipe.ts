import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'increment'
})
export class IncrementPipe implements PipeTransform {

  transform(value:number, rate:number):number {
    let salary:number = value + (value*rate/100)

    return salary;
  }

}
