import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements AfterViewInit {
  @ViewChildren('sayingDetails') sayingDetailsElems!: QueryList<ElementRef<HTMLDivElement>>;

  testimonials = [
    {
      name: 'Harsh Ajmera',
      img: { src: 'harsh-ajmera.jpg' },
      linkdinUrl: 'https://www.linkedin.com/in/ajmerah',
      designation: 'CTO of Addenda & hala',
      says: [
        'It was my privilege to have worked alongside him for a considerable period and I can say without a doubt that Anil is one of the best developers I have worked with.',
        'Anil is a highly talented Frontend Developer who brings a wealth of knowledge to any project he works on. His ability to translate complex designs into intuitive user interfaces is impressive. He is well-versed in multiple frontend technologies such as React and Angular. Anil has a keen eye for detail and takes pride in delivering pixel-perfect designs that are visually stunning.',
        "In addition to his frontend expertise, Anil is also well-versed in backend technologies such as Node.js, Express.js, and MongoDB. He has developed RESTful APIs, integrated them with frontend frameworks, and has a good understanding of serverless architectures. Anil's ability to work with both frontend and backend technologies makes him a valuable asset to any project.",
        "Anil is an excellent team player who is always willing to help his colleagues. He possesses great communication skills that enable him to work collaboratively with cross-functional teams, including designers, product managers, and other developers. Anil's contributions to our team have been invaluable, and he is always eager to learn new technologies and techniques to improve his skillset.",
      ],
    },
    {
      name: 'Walid Daniel Dib',
      img: { src: 'walid.jpg' },
      linkdinUrl: 'https://www.linkedin.com/in/wdanieldib',
      designation: 'CEO of Addenda & hala',
      says: [
        'I had the pleasure of working with Anil at both Addenda and hala.',
        'He is a talented full stack engineer who consistently delivers high-quality work. In addition to his deep technical expertise, he is excellent at playing Counter Strike GO and I have yet to meet someone who can beat him at that game.',
        "Anil's standout qualities are his caring attitude towards the general team spirit and morale. He is skilled at identifying the root cause of problems and coming up with effective and efficient solutions.",
        'I highly recommend Anil for any software engineering role.',
      ],
    },
  ];

  ngAfterViewInit(): void {
    this.sayingDetailsElems.forEach((itemElem) => {
      if (this.isElemContentOverflowing(itemElem.nativeElement)) {
        const seeMoreBtn = itemElem.nativeElement.querySelector('button');
        if (seeMoreBtn) seeMoreBtn.style.display = 'block';
      }
    });
  }

  isElemContentOverflowing(el: HTMLDivElement | null) {
    if (!el) return false;

    const curOverflow = el.style.overflow;
    if (!curOverflow || curOverflow === 'visible') {
      el.style.overflow = 'hidden';
    }

    const isOverflowing = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;

    el.style.overflow = curOverflow;
    return isOverflowing;
  }

  onClickSeeMore(elem: HTMLDivElement, seeMoreBtn: HTMLButtonElement) {
    elem.style.display = 'block';
    seeMoreBtn.style.display = 'none';
  }
}
