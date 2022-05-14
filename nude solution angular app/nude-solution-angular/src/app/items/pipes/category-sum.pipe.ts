import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../interface';

@Pipe({
  name: 'categorySum',
})
export class CategorySumPipe implements PipeTransform {
  transform(items: Array<Item>): number {
    let sum: number = 0;
    for (let item of items) {
      sum += item.value;
    }
    return sum;
  }
}
