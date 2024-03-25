import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-book-app';
  featureSelected = 'recipe';

  onNavigate(feature: string) {
    this.featureSelected = feature;
  }
}
