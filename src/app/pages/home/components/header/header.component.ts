import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('header') headerElemRef!: ElementRef<HTMLElement>;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.setHeaderFloating();
  }

  activatedRoute = inject(ActivatedRoute);

  oldScrollY: number = 0;
  subs: Subscription[] = [];

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
    if (typeof window == 'undefined' || !this.headerElemRef) return;

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

  goToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
