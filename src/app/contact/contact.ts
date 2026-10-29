import { Component } from '@angular/core';
import { ScrollToSection } from '../scroll-to-section.directive';

@Component({
  imports: [ScrollToSection],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {}
