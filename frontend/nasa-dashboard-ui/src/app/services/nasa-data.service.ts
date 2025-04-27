import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NasaDataService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:5016/api/nasadata/land-surface-temperature';  // ✅ Adjust if needed

  getLandSurfaceTemperature(
    latitude: number,
    longitude: number,
    start: string,
    end: string
  ): Observable<any> {
    const url = `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&start=${start}&end=${end}`;
    return this.http.get<any>(url);
  }
  
}
