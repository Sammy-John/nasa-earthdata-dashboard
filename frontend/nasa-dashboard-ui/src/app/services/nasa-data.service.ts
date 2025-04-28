import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaDataService {
  private apiUrl = 'http://localhost:5016/api/nasadata';

  constructor(private http: HttpClient) {}

  /**
   * 🔥 FIXED: Always use nasa-data endpoint and pass the parameter.
   */
  getNasaData(location: string, start: string, end: string, parameter: string): Observable<any> {
    const url = `${this.apiUrl}/nasa-data?location=${location}&start=${start}&end=${end}&parameter=${parameter}`;
    return this.http.get(url);
  }

  /**
   * ✅ No changes needed here.
   */
  getLocations(): Observable<string[]> {
    const url = `${this.apiUrl}/locations`;
    return this.http.get<string[]>(url);
  }
}
