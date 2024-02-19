import { Component } from '@angular/core';
import { HeroComponent } from './components/sections/hero/hero.component';
import { AboutComponent } from './components/sections/about/about.component';
import { ExperienceComponent } from './components/sections/experience/experience.component';
import { SkillsComponent } from './components/sections/skills/skills.component';
import { ProjectsComponent } from './components/sections/projects/projects.component';
import { TestimonialsComponent } from './components/sections/testimonials/testimonials.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
