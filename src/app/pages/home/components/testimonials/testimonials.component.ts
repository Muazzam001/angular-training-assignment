import { NgFor } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialsComponent {
  @ViewChild('testimonialSwiperContainer') testimonialSwiperContainerRef!: ElementRef;
  public swiperParams!: SwiperOptions;

  public slides = [
    {
      image: './assets/images/author1.png',
      title: 'Alex Johnson',
      profession: 'Developer',
    },
    {
      image: './assets/images/author2.png',
      title: 'Mily Martin',
      profession: 'CTO',
    },
    {
      image: './assets/images/author3.png',
      title: 'John Wick',
      profession: 'QA Engineer',
    },
    {
      image: './assets/images/author4.png',
      title: 'Martin Mily',
      profession: 'Lead Engineer',
    },
  ];

  ngOnInit() {
    register();
  }

  ngAfterViewInit(): void {
    const slidesArr = this.slides;
    this.swiperParams = {
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1024: {
          slidesPerView: 2,
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.testimonial-slider-navigation .button-next',
        prevEl: '.testimonial-slider-navigation .button-prev',
      },
      on: {
        init: function (index: any) {
          $('.testimonial-slider-navigation .counter').html(
            '<span class="text-theme">' +
            (slidesArr[index]) +
            '</span>' +
            '/' +
            slidesArr.length
          );
        },
        slideChange: function (index: any) {
          $('.testimonial-slider-navigation .counter').html(
            '<span class="text-theme">' +
            (slidesArr[index]) +
            '</span>' +
            '/' +
            slidesArr.length
          );
        },
      },
    };

    Object.assign(this.testimonialSwiperContainerRef.nativeElement, this.swiperParams); // Add parameters to the Swiper
    this.testimonialSwiperContainerRef.nativeElement.initialize(); // Init Swiper
  }

}
