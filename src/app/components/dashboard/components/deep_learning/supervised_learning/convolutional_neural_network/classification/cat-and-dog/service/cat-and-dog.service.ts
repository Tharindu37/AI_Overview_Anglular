import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatAndDogService {
  constructor(private http: HttpClient) {}

  predictCatOrDog(file: File): Observable<{ predicted_result: string }> {
    const formData = new FormData();
    formData.append('file', file);
    const url = 'http://192.168.1.199:8002/predict-car-or-dog';
    return this.http.post<{ predicted_result: string }>(url, formData);
  }
}
