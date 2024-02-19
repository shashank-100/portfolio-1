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
    { name: 'Linkedin', url: '', icon: faLinkedin, color: 'blue' },
    { name: 'GitHub', url: '', icon: faGithub },
    { name: 'StackOverflow', url: '', icon: faStackOverflow },
    { name: 'Instagram', url: '', icon: faInstagram },
  ];
}
