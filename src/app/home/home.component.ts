import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxSplideModule } from 'ngx-splide';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxSplideModule, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  carouselOptions = {
    type: 'loop',
    perPage: 5,
    autoplay: true,
    interval: 3000,
    gap: '2rem',
    pagination: true,      
    arrows: true,
    breakpoints: {
    1200: {
      perPage: 4,
      gap: '1.5rem'
    },
    992: {
      perPage: 3,
      gap: '1rem'
    },
    768: {
      perPage: 2,
      gap: '1rem'
    },
    576: {
      perPage: 1,
      gap: '0.5rem'
    }
  }
};

  images = [
    'images/carousel/image1.jpg',
    'images/carousel/image2.jpg',
    'images/carousel/image3.jpg',
    'images/carousel/image4.jpg',
    'images/carousel/image5.jpg',
    'images/carousel/image6.jpg',
    'images/carousel/image7.jpeg',
    'images/carousel/image8.jpg',
    'images/carousel/image9.jpg',
    'images/carousel/image10.jpg'
  ];

  showPlayButton = true;

  playVideo(video: HTMLVideoElement): void {
    video.play()
      .then(() => {
        this.showPlayButton = false;
      })
      .catch(error => {
        console.error('Playback failed:', error);
      });
  }
}
