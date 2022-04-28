import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { getDOMElement } from './utilities';

export default function animateLocationContent() {
  gsap.registerPlugin(ScrollTrigger);

  const mainElem = getDOMElement('main');

  if (mainElem) {
    console.log('animateLocationContent called...');

    const contentTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.page__section-location',
        start: 'top 90%',
        end: 'top 45%',
        scrub: 4,
        markers: true
      },
      defaults: {
        ease: 'power4.inOut',
        duration: 2
      }
    });

    contentTimeline
      .fromTo(
        '#main .grid__item:nth-child(odd)',
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          opacity: 0
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: 1,
          stagger: 1.75,
          duration: 8
        }
      ).fromTo(
        '#main .grid__item:nth-child(even)',
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          opacity: 0
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: 1,
          stagger: 1.75,
          duration: 8
        },
        '=-4'
      );
  }
}
