import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NasaDataService } from '../../services/nasa-data.service';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';
import { FormsModule } from '@angular/forms';  

interface TemperatureRecord {
  date: string;
  temperatureC: number;
}

@Component({
  selector: 'app-nasa-data',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgChartsModule],  // ✅ Include FormsModule here!
  templateUrl: './nasa-data.component.html',
  styleUrls: ['./nasa-data.component.scss']
})

export class NasaDataComponent implements OnInit {
  data: TemperatureRecord[] = [];
  loading = true;
  error = '';

  // Query Control Properties:
  latitude: number = -41.2865;          // Default Wellington
  longitude: number = 174.7762;
  startDate: string = '2023-01-01';
  endDate: string = '2023-01-05';

  // Chart Configuration:
  public chartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Temperature (°C)',
        fill: true,
        tension: 0.3,
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66,165,245,0.2)',
        pointBackgroundColor: '#1E88E5'
      }
    ]
  };

  public chartType: ChartType = 'line';

  constructor(private nasaService: NasaDataService) {}

  ngOnInit(): void {
    this.fetchData();                         // ✅ Initial fetch with defaults
  }

  onSubmit(): void {
    this.fetchData();                         // ✅ Called when user submits the form
  }

  private fetchData(): void {
    this.loading = true;
    this.error = '';
    this.data = [];

    this.nasaService.getLandSurfaceTemperature(
      this.latitude,
      this.longitude,
      this.startDate,
      this.endDate
    ).subscribe({
      next: (response) => {
        console.log('API response:', response);
        this.data = Array.isArray(response) ? response : [];
        this.updateChart();
        this.loading = false;
      },
      error: (err) => {
        console.error('API error:', err);
        this.error = 'Error fetching data from the API.';
        this.loading = false;
      }
    });
  }

  private updateChart(): void {
    this.chartData.labels = this.data.map(item => item.date);
    this.chartData.datasets[0].data = this.data.map(item => item.temperatureC);
  }
}
