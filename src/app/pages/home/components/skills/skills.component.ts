import { NgFor } from '@angular/common';
import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element';
import { Swiper, SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class SkillsComponent {
  @ViewChild('skillsSwiperContainer') skillsSwiperContainerRef!: ElementRef;
  swiper!: Swiper;
  public swiperParams!: SwiperOptions;
  currentSlideNumber: number = 1;

  constructor(private cdr: ChangeDetectorRef) { }

  public slides = [
    {
      image: './assets/images/figma.svg',
      title: 'Figma',
      percent: 80,
    },
    {
      image: './assets/images/webflow.svg',
      title: 'Webflow',
      percent: 95,
    },
    {
      image: './assets/images/tailwind.svg',
      title: 'Tailwind',
      percent: 90,
    },
    {
      image: './assets/images/html.svg',
      title: 'HTML5',
      percent: 98,
    },
    {
      image: './assets/images/css.svg',
      title: 'CSS3',
      percent: 98,
    },
    {
      image: './assets/images/js.svg',
      title: 'Javascript',
      percent: 70,
    },
    {
      image: './assets/images/jquery.svg',
      title: 'jQuery',
      percent: 70,
    },
    {
      image: './assets/images/angular.svg',
      title: 'Angular',
      percent: 60,
    },
    {
      image: './assets/images/react.svg',
      title: 'React',
      percent: 50,
    },
    {
      image: './assets/images/vue.svg',
      title: 'Vue',
      percent: 40,
    },
  ];

  ngOnInit() {
    register();
  }

  ngAfterViewInit(): void {
    const slidesArr = this.slides;
    this.swiperParams = {
      loop: true,
      slidesPerView: 2,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.skills-slider-navigation .button-next',
        prevEl: '.skills-slider-navigation .button-prev',
      },
      on: {
        init: function (index: any) {
          $('.skills-slider-navigation .counter').html(
            '<span class="text-theme">' +
            (1) +
            '</span>' +
            '/' +
            slidesArr.length
          );
        },
        slideChange: function (index: any) {
          $('.skills-slider-navigation .counter').html(
            '<span class="text-theme">' +
            (1) +
            '</span>' +
            '/' +
            slidesArr.length
          );
        },
      },
    };

    Object.assign(this.skillsSwiperContainerRef.nativeElement, this.swiperParams); // Add parameters to the Swiper
    this.skillsSwiperContainerRef.nativeElement.initialize(); // Init Swiper
  }

}
