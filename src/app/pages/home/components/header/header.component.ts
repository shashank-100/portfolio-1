import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('header') headerElemRef!: ElementRef<HTMLElement>;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (typeof window == 'undefined') return;

    if (window.innerWidth > 640) {
      this.setHeaderFloating();
    }
  }
  // @HostListener('window:resize', ['$event'])
  // onWindowResize() {
  //   console.log('resize');
  //   this.mobileMenuOpen.set(false);
  //   this.headerElemRef.nativeElement?.classList.remove('menu-close');
  // }

  activatedRoute = inject(ActivatedRoute);

  icons = { faBars, faXmark };
  oldScrollY: number = 0;
  subs: Subscription[] = [];
  mobileMenuOpen = signal(false);

  ngOnInit(): void {
    this.subs.push(
      this.activatedRoute.fragment.subscribe((fragment) => {
        if (fragment) this.goToSection(fragment);
      }),
    );
  }

  isScrollingUp() {
    let isDirectionUp = this.oldScrollY > window.scrollY;
    this.oldScrollY = window.scrollY;

    return isDirectionUp;
  }

  setHeaderFloating() {
    if (!this.headerElemRef) return;

    const headerHeight = 40;
    const elem = this.headerElemRef.nativeElement;
    const isFloating = window.scrollY > headerHeight + 5;

    // Method 2
    if (isFloating) {
      elem.classList.add('float-in');
      document.body.style.paddingTop = `${headerHeight}px`;

      if (this.isScrollingUp()) {
        elem.classList.add('slide-in');
      } else {
        elem.classList.remove('slide-in');
      }
    } else {
      elem.classList.remove('slide-in');
      setTimeout(() => {
        if (elem.classList.contains('float-in')) {
          elem.classList.remove('float-in');
          document.body.style.paddingTop = 'initial';
        }
      }, 350);
    }
  }

  setMobileMenuOpen(open: boolean) {
    const headerElem = this.headerElemRef.nativeElement;
    if (!headerElem) return;

    // this.mobileMenuOpen.set(open);
    // headerElem.classList.toggle('menu-open', open);
    // headerElem.classList.toggle('menu-close', !open);
  }

  goToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
