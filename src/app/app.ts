import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, inject, PLATFORM_ID, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('doctor-website');

  menuOpen = false;
  servicesSubmenuOpen = false;
  consultationsSubmenuOpen = false;

  private isBrowser: boolean;
  private header: HTMLElement | null = null;
  private main: HTMLElement | null = null;

  constructor(router: Router) {
    const platformId = inject(PLATFORM_ID);
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Кешування DOM елементів після навігації
        this.header = document.querySelector('header');
        this.main = document.querySelector('main');
      });
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleServicesSubmenu(event: Event) {
    event.preventDefault(); // Щоб не спрацьовував перехід одразу
    this.servicesSubmenuOpen = !this.servicesSubmenuOpen;
    this.consultationsSubmenuOpen = false; // Закриваємо інше підменю
  }

  toggleConsultationsSubmenu(event: Event) {
    event.preventDefault(); // Щоб не спрацьовував перехід одразу
    this.consultationsSubmenuOpen = !this.consultationsSubmenuOpen;
    this.servicesSubmenuOpen = false; // Закриваємо інше підменю
  }

  closeServicesSubmenu() {
    this.servicesSubmenuOpen = false;
  }

  closeConsultationsSubmenu() {
    this.consultationsSubmenuOpen = false;
  }

  closeAllSubmenus() {
    this.servicesSubmenuOpen = false;
    this.consultationsSubmenuOpen = false;
  }

  closeMenu() {
    this.menuOpen = false;
    this.servicesSubmenuOpen = false;
    this.consultationsSubmenuOpen = false;
  }

  // Закриття меню при кліку поза ним
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isBrowser) return;
    const target = event.target as HTMLElement;
    const isClickInsideMenu = target.closest('.right-menu');
    if (!isClickInsideMenu) {
      this.menuOpen = false;
    }
  }

  // Під час прокручування сторінки змінюємо клас для хедера
  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!this.isBrowser) return;

    // Якщо не кешували раніше
    if (!this.header) this.header = document.querySelector('header');
    if (!this.main) this.main = document.querySelector('main');

    if (window.scrollY > 100) {
      this.header?.classList.add('fixed');
      this.main?.classList.add('fixed-header');
    } else {
      this.header?.classList.remove('fixed');
      this.main?.classList.remove('fixed-header');
    }
  }
}
