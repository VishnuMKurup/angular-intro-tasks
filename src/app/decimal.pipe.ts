import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal'
})
export class DecimalPipe implements PipeTransform {

  transform(value: number): number {
    var num1 =Math.round((value * 100) / 100);
    console.log(num1);
    return num1;
  }

}
