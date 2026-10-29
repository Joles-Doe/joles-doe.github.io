import { Component } from '@angular/core';
import { ScrollToSection } from '../../scroll-to-section.directive';

@Component({
  imports: [ScrollToSection],
  selector: 'app-untethered',
  styleUrl: './untethered.css',
  templateUrl: './untethered.html',
})
export class Untethered {}
