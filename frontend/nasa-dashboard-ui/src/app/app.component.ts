import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';   // ✅ Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],                       // ✅ Add RouterModule here!
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
