import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

type Experience = {
  name: string;
  themeColor?: string;
  website?: string;
  logo: string;
  location: string;
  designations: { title: string; start_date: string; end_date: string }[];
  employment_type: string;
  descriptionList: string[];
  usedSkills: string[];
};

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  icons = { faArrowUpRightFromSquare };

  experiences: Experience[] = [
    {
      name: 'TWIG Finance',
      website: 'https://twig.ae',
      logo: 'twig-finance.png',
      themeColor: 'rgba(86,214,229,1)',
      location: 'Dubai UAE',
      designations: [
        { title: 'Senior Frontend Developer', start_date: 'July 2023', end_date: 'Oct 2023' },
      ],
      employment_type: 'Full-time',
      descriptionList: [
        'Responsible for adding new features by understanding the process and workfl ow of the feature and implementing them using Next.js.',
        'Responsible for creating new pages for the customer portal dashboard, and creating reusable components using the latest technologies like Next.js with Typescript, redux-toolkit, and Tailwind.',
        'Worked on Increasing SEO optimization and web app performance using methods like lazy-loading, code splitting, caching, asset optimization, and using semantic HTML for better accessibility.',
        'Experience in implementing role-based authentication and role-based page access by utilizing the CASL library.',
        'Worked on the test cases for the developed features for the QA team to test them properly.',
        'Helped in the deployment of the front end to the production and sandbox environment using the pipeline to automate the deployment.',
      ],
      usedSkills: ['Next.js', 'React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Redux.js'],
    },
    {
      name: 'Wecover',
      website: 'https://wecover.ae/',
      logo: 'wecover.jpg',
      themeColor: 'rgba(74,195,173,1)',
      location: 'Dubai UAE',
      designations: [
        { title: 'Senior Frontend Developer', start_date: 'Apr 2023', end_date: 'May 2023' },
      ],
      employment_type: 'Freelance',
      descriptionList: [
        "Contributed to the end-to-end development of the company's web applications. This involved designing, developing, and maintaining the frontend components, along with integrating and managing the database using technologies like Next.js, Node.js, and MongoDB.",
        'By utilizing Node.js and frameworks like Express.js, I engineered the server-side logic to handle data processing, user authentication, and API integrations.',
        'Responsible for creating new pages for the company website and admin dashboard, and creating reusable components using Next.js and React.js.',
        'Experience in working on long forms and validations using the react-hook-form library.',
        'Experience in optimizing SEO and web app performance using multiple methods like lazy-loading, code splitting, asset optimization, and using semantic HTML for better accessibility.',
      ],
      usedSkills: ['Next.js', 'React.js', 'TypeScript', 'JavaScript', 'Redux.js', 'React Query'],
    },
    {
      name: 'Hala Insurance',
      website: 'https://www.linkedin.com/company/joinhala/',
      logo: 'hala.jpg',
      location: 'Dubai UAE',
      designations: [{ title: 'Frontend Developer', start_date: 'Aug 2019', end_date: 'Mar 2023' }],
      employment_type: 'Full-time',
      descriptionList: [
        'Experience in full-stack web development, including the design and implementation of company websites and web applications.',
        'Hands-on experience with large-scale Angular-based SaaS projects for insurance companies, including the development of admin panels and dashboards.',
        'Experience in creating performant web applications for motor claims and recovery, with a focus on delivering a seamless user experience.',
        'Proven experience in designing and implementing robust RESTful API backends for web applications using technologies such as Node.js, Express, and MongoDB.',
        'Proficient in integrating backend APIs into front-end web apps, utilizing technologies such as Angular and React.js.',
        'Responsible for the development and maintenance of new pages on the company website, utilizing server-side rendering using React.js for SEO optimization and improved page load and app performance.',
        'Worked on internationalizing websites for multiple languages, including Arabic and English using i18n and i18next react technologies.',
      ],
      usedSkills: [
        'Angular',
        'React.js',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'jQuery',
        'Node.js',
        'Angular Material',
        'Material-UI',
        'Bootstrap',
        'Flex Layout',
        'Git',
        'JSON',
        'WordPress',
        'Figma',
      ],
    },
    {
      name: 'TheDroid.io',
      website: 'https://thedroid.io/',
      logo: 'thedroid.jpg',
      location: 'Bengaluru',
      designations: [
        { title: 'Full Stack Web Developer', start_date: 'Feb 2019', end_date: 'Jun 2019' },
        { title: 'Backend Developer', start_date: 'Mar 2018', end_date: 'Feb 2019' },
      ],
      employment_type: 'Full-time',
      descriptionList: [
        'Expertise in full-stack web development, with a focus on designing and implementing robust RESTful API backends for web applications using technologies such as Node.js, Express, MySql, and MongoDB.',
        'Worked on dynamic front-end admin dashboards using technologies like Angular, ensuring a seamless user experience.',
        'Experience in integrating backend APIs with front-end web applications.',
        'Successfully deployed multiple production-ready front-end web applications using technologies like AWS, Google Cloud, and Firebase.',
        'Skilled in developing and maintaining databases and schema structures using MySQL and Sequelize.js, ensuring data integrity and efficient query performance.',
        'Expertise in deploying backend applications in both development and production environments using technologies such as Google Cloud, and Docker.',
        'Experience in creating and inserting SSL certificates to secure domains, ensuring data security.',
      ],
      usedSkills: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'MongoDB',
        'MySQL',
        'Bootstrap',
        'jQuery',
        'Responsive Web Design',
        'Express.js',
        'REST APIs',
        'Firebase',
        'SQL',
        'Sequelize.js',
      ],
    },
  ];

  selectedExperience = signal<Experience>(this.experiences[0]);

  onSelectExperience(experience: Experience) {
    this.selectedExperience.set(experience);
  }
}
