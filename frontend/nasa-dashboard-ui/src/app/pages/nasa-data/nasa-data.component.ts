import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nasa-data',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<h2>This is the NASA Data page!</h2>`,       // ✅ Inline template
  styleUrls: ['./nasa-data.component.scss']
})

export class NasaDataComponent {}
