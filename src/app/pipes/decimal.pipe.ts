import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal'
})
export class DecimalPipe implements PipeTransform {

  transform(value: number): number {
    if (value % 0.5 === 0) {
      var price = Math.floor((value * 100) / 100);
      return price;
    }
    else {
      var price = Math.round((value * 100) / 100);
      return price;
    }
  }
}
