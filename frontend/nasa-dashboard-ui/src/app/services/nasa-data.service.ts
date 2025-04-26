import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'                                // ✅ Makes it globally available
})
export class NasaDataService {
  private http = inject(HttpClient);                // ✅ Angular 19 inject pattern

  private apiUrl = 'http://localhost:5016/api/nasadata/land-surface-temperature';  // Adjust this if needed

  getLandSurfaceTemperature(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
