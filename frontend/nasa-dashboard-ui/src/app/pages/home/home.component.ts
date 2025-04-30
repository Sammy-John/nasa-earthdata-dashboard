import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { siAngular, siTypescript, siDotnet, siSharp, siChartdotjs } from 'simple-icons/icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  icons = {
    angular: {
      icon: siAngular,
      label: 'Angular',
      description: 'Frontend framework with routing and forms.'
    },
    dotnet: {
      icon: siDotnet,
      label: '.NET Core',
      description: 'Backend RESTful services built in .NET Core 8.'
    },
    typescript: {
      icon: siTypescript,
      label: 'TypeScript',
      description: 'Type-safe superset of JavaScript.'
    },
    csharp: {
      icon: siSharp,
      label: 'C#',
      description: 'Robust backend logic and models.'
    },
    chartjs: {
      icon: siChartdotjs,
      label: 'Chart.js',
      description: 'Dynamic charting via ng2-charts integration.'
    }
  };
}
