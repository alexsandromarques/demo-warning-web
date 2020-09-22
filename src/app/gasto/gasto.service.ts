import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gasto } from './gasto';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  private baseUrl = 'http://localhost:8080/gasto';

  constructor(private http: HttpClient) { }

  salvarGasto(gasto: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl + "/salvar"}`, gasto);
  }

  getGasto(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl + "/pesquisar"}/${id}`);
  }

  getGastos(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(`${this.baseUrl + "/listar"}`);
  }

  deleteGasto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl + "/delete"}/${id}`, { responseType: 'text' });
  }


}
