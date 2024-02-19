import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  socials = [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/anilk1sagar/',
      icon: faLinkedin,
      color: 'blue',
    },
    { name: 'GitHub', url: 'https://github.com/Anilk1sagar', icon: faGithub },
    {
      name: 'StackOverflow',
      url: 'https://stackoverflow.com/users/8460199/anil-kumar',
      icon: faStackOverflow,
    },
    { name: 'Instagram', url: 'https://www.instagram.com/anil_sagar_3/', icon: faInstagram },
  ];
}
