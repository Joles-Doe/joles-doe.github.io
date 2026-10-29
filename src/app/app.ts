import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollToSection } from './scroll-to-section.directive';

@Component({
  imports: [RouterOutlet, ScrollToSection],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
