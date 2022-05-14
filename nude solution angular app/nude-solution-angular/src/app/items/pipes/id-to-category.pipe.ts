import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../interface';

@Pipe({
  name: 'idToCategory',
})
export class IdToCategoryPipe implements PipeTransform {
  transform(id: string, categories: Array<Category>): string {
    for (let category of categories) {
      if (category.id.toString() === id) return category.name;
    }
    return '';
  }
}
