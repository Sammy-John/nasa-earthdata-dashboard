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

  getLandSurfaceTemperature(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
