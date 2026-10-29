import { Component } from '@angular/core';
import { ScrollToSection } from '../scroll-to-section.directive';

@Component({
  imports: [ScrollToSection],
  selector: 'app-introduction',
  styleUrl: './introduction.css',
  templateUrl: './introduction.html',
})
export class Introduction {}
