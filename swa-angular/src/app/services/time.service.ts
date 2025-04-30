import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private apiUrl = '/api/current-time'; // <-- Works in Azure Static Web Apps or when using `swa start`

  constructor(private http: HttpClient) {}

  getCurrentTime(): Observable<{ time: string }> {
    return this.http.get<{ time: string }>(this.apiUrl);
  }
}
