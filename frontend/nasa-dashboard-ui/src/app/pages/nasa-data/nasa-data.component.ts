import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NasaDataService } from '../../services/nasa-data.service';

interface TemperatureRecord {
  date: string;
  temperatureC: number;
}

@Component({
  selector: 'app-nasa-data',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nasa-data.component.html',
  styleUrls: ['./nasa-data.component.scss']
})
export class NasaDataComponent implements OnInit {
  data: TemperatureRecord[] = [];
  loading = true;
  error = '';

  constructor(private nasaService: NasaDataService) {}

  ngOnInit(): void {
    this.nasaService.getLandSurfaceTemperature().subscribe({
      next: (response) => {
        console.log('API response:', response);                         // ✅ Log to confirm shape
        this.data = Array.isArray(response) ? response : [];            // Adjust this if your API wraps the data
        this.loading = false;
      },
      error: (err) => {
        console.error('API error:', err);                               // ✅ Log error details
        this.error = 'Error fetching data from the API.';
        this.loading = false;
      }
    });
  }
}
