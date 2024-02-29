import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SOCIALS } from 'src/app/constants';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  socials = SOCIALS;

  ngOnInit(): void {}
}
