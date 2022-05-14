import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../interface';

@Pipe({
  name: 'categoryToId',
})
export class CategoryToIdPipe implements PipeTransform {
  transform(name: string, categories: Array<Category>): string {
    for (let category of categories) {
      if (category.name === name) return category.id.toString();
    }
    return '-1';
  }
}
