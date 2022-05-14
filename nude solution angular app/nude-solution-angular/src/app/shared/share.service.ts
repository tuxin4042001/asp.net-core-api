import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Category, Item } from '../items/interface';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  public itemBaseUrl: string = 'https://localhost:7202/api/Items';
  public categoryBaseUrl: string = 'https://localhost:7202/api/Categories';

  constructor(private http: HttpClient) {}

  /**
   * Save a specific item information
   * @param item specific item information
   * @returns saved item information
   */
  public saveItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemBaseUrl, item);
  }

  /**
   * Delete a specific item
   * @param id item id
   * @returns deleted item information
   */
  public deleteItem(id: number | undefined): Observable<number> {
    return this.http.delete<number>(this.itemBaseUrl + '/' + id);
  }

  /**
   * Update a specific item information
   * @param item specific item information
   * @returns updated item information
   */
  public updateItem(item: Item): Observable<number> {
    return this.http.put<number>(this.itemBaseUrl, item);
  }

  /**
   * Get all banks information
   * @returns all item information
   */
  public getAllItems(): Observable<Array<Item>> {
    const url = 'https://localhost:7202/api/Items';
    return this.http.get<Array<Item>>(url);
  }

  /**
   * Get a specific item information
   * @param id item id
   * @returns specific item information
   */
  public getItem(id: number): Observable<Item> {
    return this.http.get<Item>(this.itemBaseUrl + '/' + id);
  }

  /**
   * Save a specific category information
   * @param category specific category information
   * @returns saved category information
   */
  public saveCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.categoryBaseUrl, category);
  }

  /**
   * Delete a specific category
   * @param id category id
   * @returns deleted category information
   */
  public deleteCategory(id: number): Observable<number> {
    return this.http.delete<number>(this.categoryBaseUrl + '/' + id);
  }

  /**
   * Get all categories information
   * @returns all categories information
   */
  public getAllCategories(): Observable<Array<Category>> {
    const url = 'https://localhost:7202/api/Categories';
    return this.http.get<Array<Category>>(url);
  }
}
