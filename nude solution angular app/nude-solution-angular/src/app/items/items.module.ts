import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemComponent } from './item/item.component';
import { CategoryComponent } from './category/category.component';
import { IdToCategoryPipe } from './pipes/id-to-category.pipe';
import { CategoryToIdPipe } from './pipes/category-to-id.pipe';
import { CategorySumPipe } from './pipes/category-sum.pipe';

@NgModule({
  declarations: [
    ItemComponent,
    CategoryComponent,
    IdToCategoryPipe,
    CategoryToIdPipe,
    CategorySumPipe,
  ],
  imports: [CommonModule, ReactiveFormsModule, ItemsRoutingModule],
})
export class ItemsModule {}
