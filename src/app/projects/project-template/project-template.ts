import { Component } from '@angular/core';
import { ScrollToSection } from '../../scroll-to-section.directive';

@Component({
  imports: [ScrollToSection],
  selector: 'app-project-template',
  styleUrl: './project-template.css',
  templateUrl: './project-template.html',
})
export class ProjectTemplate {
  protected readonly projectType = 'Project type · Year';
  protected readonly projectName = 'Project name';
  protected readonly projectSubtitle = 'A short one-line description.';
}
