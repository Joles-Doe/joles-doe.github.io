import { Component } from '@angular/core';
import { ScrollToSection } from '../../scroll-to-section.directive';

@Component({
  imports: [ScrollToSection],
  selector: 'app-tapper',
  styleUrl: './tapper.css',
  templateUrl: './tapper.html',
})
export class Tapper {}
