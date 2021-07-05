import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Inventory} from "../model/inventory";
import {Finance} from "../model/finance";

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/fin/finance';

  constructor(private http: HttpClient) { }

  getFinance(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getAllFinance(): Observable<any> {
    return this.http.get(`${this.baseUrl}\\all`);
  }

  createFinance(finance: Finance): Observable<Finance> {
    return this.http.post<Finance>(`${this.baseUrl}`,finance);
  }

  updateFinance(id: number, value: any): Observable<Finance> {
    return this.http.put<Finance>(`${this.baseUrl}/${id}`, value);
  }

  deleteFinance(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getFinanceList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
