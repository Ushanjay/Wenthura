import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vehicle} from "../model/vehicle";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/veh/vehicle';

  constructor(private http: HttpClient) { }

  getVehicle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAllVehicle(): Observable<any> {
    return this.http.get(`${this.baseUrl}\\all`);
  }

  createVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(`${this.baseUrl}`,vehicle);
  }

  updateVehicle(id: number, value: any): Observable<Vehicle> {
    return this.http.put<Vehicle>(`${this.baseUrl}/${id}`, value);
  }

  deleteVehicle(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getVehicleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
