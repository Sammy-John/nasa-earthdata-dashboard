import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';                    // ✅ Required
import { routes } from './app/app.routes';                          // ✅ Your routes

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideHttpClient(),                                           // ✅ HTTP client
    provideRouter(routes)                                          // ✅ Router system (Fixes ActivatedRoute error!)
  ]
}).catch(err => console.error(err));
