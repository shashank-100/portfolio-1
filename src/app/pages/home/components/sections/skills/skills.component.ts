import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

type Skill = {
  name: string;
  category: 'frontend' | 'backend' | 'tool';
  img: { src: string; width?: string };
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate(1000, style({ opacity: 1 }))]),
    ]),
  ],
})
export class SkillsComponent {
  categories = [
    // { label: 'All', name: 'all' },
    { label: 'Frontend', name: 'frontend' },
    { label: 'Backend', name: 'backend' },
    { label: 'Tools', name: 'tool' },
  ];

  skills: Skill[] = [
    {
      name: 'Angular',
      category: 'frontend',
      img: { src: 'angular.svg' },
    },
    {
      name: 'React.js',
      category: 'frontend',
      img: { src: 'react.svg' },
    },
    {
      name: 'Next.js',
      category: 'frontend',
      img: { src: 'nextjs.svg' },
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      img: { src: 'typescript.svg' },
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      img: { src: 'javascript.svg' },
    },
    {
      name: 'HTML',
      category: 'frontend',
      img: { src: 'html.svg' },
    },
    {
      name: 'CSS',
      category: 'frontend',
      img: { src: 'css.svg' },
    },
    {
      name: 'SCSS',
      category: 'frontend',
      img: { src: 'scss.svg' },
    },
    {
      name: 'Bootstrap',
      category: 'frontend',
      img: { src: 'bootstrap.svg' },
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      img: { src: 'tailwind.svg' },
    },
    {
      name: 'Node.js',
      category: 'backend',
      img: { src: 'nodejs.svg' },
    },
    {
      name: 'NPM',
      category: 'tool',
      img: { src: 'npm.svg' },
    },
    {
      name: 'Express.js',
      category: 'backend',
      img: { src: 'express.svg' },
    },
    {
      name: 'MongoDB',
      category: 'backend',
      img: { src: 'mongodb.svg' },
    },
    {
      name: 'Sequalize.js',
      category: 'backend',
      img: { src: 'sequalizejs.svg' },
    },
    {
      name: 'MySql',
      category: 'backend',
      img: { src: 'mysql.svg' },
    },
    {
      name: 'Firebase',
      category: 'backend',
      img: { src: 'firebase.svg' },
    },
    {
      name: 'Git',
      category: 'tool',
      img: { src: 'git.svg' },
    },
    {
      name: 'GitHub',
      category: 'tool',
      img: { src: 'github.svg' },
    },
    {
      name: 'GitLab',
      category: 'tool',
      img: { src: 'gitlab.svg' },
    },
    {
      name: 'Lodash.js',
      category: 'tool',
      img: { src: 'lodash.svg' },
    },
    {
      name: 'JSON',
      category: 'tool',
      img: { src: 'json.svg' },
    },
    {
      name: 'Google Cloud',
      category: 'tool',
      img: { src: 'google-cloud.svg' },
    },
    {
      name: 'Docker',
      category: 'tool',
      img: { src: 'docker.svg' },
    },
    {
      name: 'Figma',
      category: 'tool',
      img: { src: 'figma.svg' },
    },
    {
      name: 'Wordpress',
      category: 'tool',
      img: { src: 'wordpress.svg' },
    },
    {
      name: 'Netlify',
      category: 'tool',
      img: { src: 'netlify.svg' },
    },
    {
      name: 'Webpack',
      category: 'tool',
      img: { src: 'webpack.svg' },
    },
  ];

  selectedCategorySig = signal<string>(this.categories[0].name);

  filteredSkills = computed(() => {
    const selectedCategory = this.selectedCategorySig();
    if (selectedCategory === 'all') {
      return this.skills;
    }
    return this.skills.filter((skill) => skill.category === selectedCategory);
  });
}
