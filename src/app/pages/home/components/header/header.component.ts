import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
  effect,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('header') headerElemRef!: ElementRef<HTMLElement>;
  @ViewChild('navbar') navbarElemRef!: ElementRef<HTMLElement>;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.changeHeaderFloating();
    if (this.isMobileMenuOpenSig()) {
      this.isMobileMenuOpenSig.set(false);
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (this.isMobileMenuOpenSig()) {
      this.isMobileMenuOpenSig.set(false);
    }
    if (this.isHeaderFloatingSig()) {
      this.isHeaderFloatingSig.set(false);
      this.removeHeaderFloating();
    }
  }

  activatedRoute = inject(ActivatedRoute);

  navLinks = [
    { label: 'Home', fragment: '', routerLink: '/' },
    { label: 'About', fragment: 'about', routerLink: '/' },
    { label: 'Experiences', fragment: 'experiences', routerLink: '/' },
    { label: 'Skills', fragment: 'skills', routerLink: '/' },
    { label: 'Testimonials', fragment: 'testimonials', routerLink: '/' },
    // { label: 'Projects', fragment: 'projects', routerLink: '/' },
    { label: 'Contact', fragment: 'contact', routerLink: '/' },
  ];
  icons = { faBars, faXmark };
  oldScrollY: number = 0;
  subs: Subscription[] = [];
  isHeaderFloatingSig = signal(false);
  activeFragmentSig = signal<string>('');
  isMobileMenuOpenSig = signal(false);

  constructor() {
    effect(() => {
      this.setMobileMenuOpen(this.isMobileMenuOpenSig());
    });
  }

  ngOnInit(): void {
    this.subs.push(
      this.activatedRoute.fragment.subscribe((fragment) => {
        this.activeFragmentSig.set(fragment || '');
        this.goToSection(fragment || '');
      }),
    );
  }

  onLogoClick() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  isScrollingUp() {
    let isDirectionUp = this.oldScrollY > window.scrollY;
    this.oldScrollY = window.scrollY;

    return isDirectionUp;
  }

  changeHeaderFloating() {
    if (typeof window == 'undefined' || !this.headerElemRef) return;

    const headerHeight = 50;
    this.isHeaderFloatingSig.set(window.scrollY > headerHeight + 5);

    if (this.isHeaderFloatingSig()) {
      this.setHeaderFloating(headerHeight);
    } else {
      this.removeHeaderFloating();
    }
  }

  setHeaderFloating(headerHeight: number) {
    const elem = this.headerElemRef.nativeElement;

    elem.classList.add('float-in');
    document.body.style.paddingTop = `${headerHeight}px`;

    if (this.isScrollingUp()) {
      elem.classList.add('slide-in');
    } else {
      elem.classList.remove('slide-in');
    }
  }

  removeHeaderFloating() {
    const elem = this.headerElemRef.nativeElement;

    elem.classList.remove('slide-in');
    setTimeout(() => {
      if (elem.classList.contains('float-in')) {
        elem.classList.remove('float-in');
        document.body.style.paddingTop = 'initial';
      }
    }, 350);
  }

  setMobileMenuOpen(open: boolean) {
    this.navbarElemRef.nativeElement?.classList.toggle('menu-open', open);
  }

  goToSection(section: string) {
    if (section) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }

  onNavLinkClick() {
    if (this.isMobileMenuOpenSig()) {
      this.isMobileMenuOpenSig.set(false);
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
