import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flower } from './../models/flower';
import { Observable } from 'rxjs';

interface PredictFlower {
  predicted_result: string;
}
@Injectable({
  providedIn: 'root',
})
export class FlowerService {
  constructor(private http: HttpClient) {}
  predictFlowerName(flower: Flower): Observable<PredictFlower> {
    const url = 'http://192.168.1.199:8002/predict-flower';
    return this.http.post<PredictFlower>(url, flower);
  }
}
