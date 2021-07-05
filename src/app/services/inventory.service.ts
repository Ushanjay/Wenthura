import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Inventory} from "../model/inventory";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/inv/inventory';

  constructor(private http: HttpClient) { }

  getInventory(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getAllInventory(): Observable<any> {
    return this.http.get(`${this.baseUrl}\\all`);
  }

  createInventory(inventory: Inventory): Observable<Inventory> {
    return this.http.post<Inventory>(`${this.baseUrl}`,inventory);
  }

  updateInventory(id: number, value: any): Observable<Inventory> {
    return this.http.put<Inventory>(`${this.baseUrl}/${id}`, value);
  }

  deleteInventory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getInventoryList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
