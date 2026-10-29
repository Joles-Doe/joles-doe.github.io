import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: 'a[appScrollTo]',
  standalone: true,
})
export class ScrollToSection {
  @Input({ required: true }) appScrollTo!: string;

  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    const scrollToSection = () => {
      this.document.defaultView?.requestAnimationFrame(() => {
        this.document.getElementById(this.appScrollTo)?.scrollIntoView({
          behavior: 'auto',
          block: 'start',
        });
      });
    };

    if (this.router.url !== '/') {
      void this.router.navigateByUrl('/').then(scrollToSection);
      return;
    }

    scrollToSection();
  }
}
