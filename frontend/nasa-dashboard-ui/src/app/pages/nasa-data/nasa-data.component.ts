import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NasaDataService } from '../../services/nasa-data.service';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

interface TemperatureRecord {
  date: string;
  value: number;
}

@Component({
  selector: 'app-nasa-data',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgChartsModule],
  templateUrl: './nasa-data.component.html',
  styleUrls: ['./nasa-data.component.scss']
})
export class NasaDataComponent implements OnInit {
  data: TemperatureRecord[] = [];
  locations: string[] = [];                // ✅ Add this
  loading = true;
  error = '';

  // Form controls:
  location: string = '';
  startDate: string = '2023-01-01';
  endDate: string = '2023-01-05';
  dataType: string = 'T2M';  
  
  // Chart configuration:
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
    this.loadLocations();                 // ✅ Pull locations on init
  }

  get dataLabel(): string {
    return this.dataType === 'T2M' ? 'Temperature (°C)' : 'Vegetation Index (NDVI)';
  }

  onSubmit(): void {
    if (this.location) {
      this.fetchData();
    } else {
      this.error = 'Please select a location.';
    }
  }

  private loadLocations(): void {
    this.nasaService.getLocations().subscribe({
      next: (response: string[]) => {   // ✅ Added string[] type
        this.locations = response;
        this.location = this.locations[0] || '';
        if (this.location) {
          this.fetchData();
        }
      },
      error: (err: any) => {           // ✅ Added any type to error
        this.error = 'Error fetching available locations.';
        this.loading = false;
      }      
    });
  }

  private fetchData(): void {
    this.loading = true;
    this.error = '';
    this.data = [];

    this.nasaService.getNasaData(this.location, this.startDate, this.endDate, this.dataType)
      .subscribe({
        next: (response) => {
          this.data = Array.isArray(response) ? response : [];
          this.updateChart();
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Error fetching data from the API.';
          this.loading = false;
        }
      });
  }

  private updateChart(): void {
    this.chartData.labels = this.data.map(item => item.date);
    this.chartData.datasets[0].data = this.data.map(item => item.value);
    this.chartData.datasets[0].label = this.dataLabel;
  }
}
