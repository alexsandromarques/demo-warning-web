import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Warning } from './warning';

@Injectable({
  providedIn: 'root'
})
export class WarningService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getWarning(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl + "/warning"}/${id}`);
  }

  getDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl + "/details"}/${id}`);
  }

  createWarning(warning: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl+"/save"}`, warning);
  }

  updatewarning(warning: any): Observable<Object> {
    return this.http.put(`${this.baseUrl + "/update"}`, warning);
  }

  deletewarning(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl + "/delete"}/${id}`, { responseType: 'text' });
  }

  getwarningList(): Observable<Warning[]> {
    console.log("listar");
    return this.http.get<Warning[]>(`${this.baseUrl+"/list"}`);
  }
}
