import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'qr-code-app';
}
