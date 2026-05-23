import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }), // Enable event coalescing for better performance
    provideRouter(routes,
      withViewTransitions(), // Enable view transitions for smoother navigation
      withInMemoryScrolling({scrollPositionRestoration: 'top'})), // Restore scroll position to top on navigation
      provideHttpClient( withFetch() ), // Provide HttpClient for making HTTP requests
      provideClientHydration(withEventReplay())
  ]
};
