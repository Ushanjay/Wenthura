import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vehicle} from "../model/vendor";
import {Observable} from "rxjs";
import {Inventory} from "../model/inventory";

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getBooks() {
    return this.httpClient.get<Vehicle[]>('http://localhost:8080/springboot-crud-rest/vehicle/get');
  }

  addBook(newBook: Vehicle) {
    return this.httpClient.post<Vehicle>('http://localhost:8080/springboot-crud-rest/vehicle/add', newBook);
  }

  deleteBook(id) {
    return this.httpClient.delete<Vehicle>('http://localhost:8080/springboot-crud-rest/vehicle/' + id);
  }

  updateBook(updatedBook: Vehicle) {
    return this.httpClient.put<Vehicle>('http://localhost:8080/springboot-crud-rest/vehicle/update', updatedBook);
  }

  // updateBook(id: number, value: any): Observable<Vendor> {
  //   return this.httpClient.put<Vendor>(`http://localhost:8080/springboot-crud-rest/vendor/update`+id, value);
  // }
}
