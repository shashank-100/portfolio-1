import { Component, OnDestroy, OnInit, inject } from '@angular/core';
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
  activatedRoute = inject(ActivatedRoute);

  subs: Subscription[] = [];

  ngOnInit(): void {
    this.subs.push(
      this.activatedRoute.fragment.subscribe((fragment) => {
        if (fragment) this.goToSection(fragment);
      }),
    );
  }

  goToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
