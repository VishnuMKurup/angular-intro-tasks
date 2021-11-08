import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal'
})
export class DecimalPipe implements PipeTransform {

  transform(value: number): number {
    if (value % 0.5 === 0) {
      var num1 = Math.floor((value * 100) / 100);
      return num1;
    }
    else {
      var num1 = Math.round((value * 100) / 100);
      return num1;
    }
  }
}
