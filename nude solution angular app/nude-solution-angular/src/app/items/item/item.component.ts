import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ShareService } from 'src/app/shared/share.service';
import * as _ from 'lodash';
import { Category, Item } from '../interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  private refresh: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public items: Array<Item> = [];
  public itemsAfterCategory: _.Dictionary<Item[]> = {};
  public categories: Array<Category> = [];
  public newItem: FormGroup = new FormGroup({
    name: new FormControl(''),
    value: new FormControl(0),
    category: new FormControl(1),
  });

  constructor(private shareService: ShareService) {}

  public ngOnInit(): void {
    this.fetchAllData();
    this.refresh.subscribe((refresh: boolean) => {
      if (refresh) {
        this.fetchAllData();
      }
    });
  }

  private fetchAllData(): void {
    this.shareService
      .getAllCategories()
      .subscribe((response: Array<Category>) => {
        if (response) {
          this.categories = response;
          this.shareService.getAllItems().subscribe((resp: Array<Item>) => {
            if (resp) {
              this.items = resp;
              this.items.sort(function (a, b) {
                return a.name.localeCompare(b.name);
              });
              this.itemsAfterCategory = _.groupBy(
                this.items,
                (item) => item.category
              );
              console.log(this.itemsAfterCategory);
            } else {
              this.items = [];
            }
          });
        } else {
          this.categories = [];
        }
      });
  }

  public onSubmit(): void {
    let item: Item = {
      id: 1,
      name: this.newItem.value.name,
      value: this.newItem.value.value,
      category: this.newItem.value.category,
    };
    delete item.id;
    this.shareService.saveItem(item).subscribe((response: Item) => {
      if (response) {
        this.refresh.next(true);
        this.newItem = new FormGroup({
          name: new FormControl(''),
          value: new FormControl(0),
          category: new FormControl(1),
        });
      }
    });
  }

  public deleteItem(id: number | undefined): void {
    this.shareService.deleteItem(id).subscribe((response: number) => {
      this.refresh.next(true);
    });
  }
}
