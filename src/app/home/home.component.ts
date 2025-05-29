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
    gap: '1rem',
    pagination: true,      
    arrows: true          
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
    'images/carousel/image10.jpg',
    'images/carousel/image11.jpg'
  ];
}
