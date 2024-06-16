import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Обеспечиваем HttpClient 
    ...appConfig.providers, // Добавляем провайдеры из appConfig
  ],
})
  .catch((err) => console.error(err));