import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flower } from './../models/flower';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlowerService {
  constructor(private http: HttpClient) {}
  predictFlowerName(flower: Flower): Observable<string> {
    const url = 'http://192.168.1.200:8002/predict-flower';
    return this.http.post<string>(url, flower);
  }
}
