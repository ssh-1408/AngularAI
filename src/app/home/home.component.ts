import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxSplideModule } from 'ngx-splide';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxSplideModule, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    AOS.init();
  }
  
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
    'images/carousel/image7.jpg',
    'images/carousel/image8.jpg',
    'images/carousel/image9.jpg',
    'images/carousel/image10.jpg'
  ];

  collectionBoxes = [
  {
    title: 'Intelligent',
    image: 'images/collection/collection-img1.png',
    description: 'Smart algorithms that adapt, learn, and generate with precision to enhance your creative workflows.'
  },
  {
    title: 'Visualization',
    image: 'images/collection/collection-img2.png',
    description: 'Transform ideas into vivid, high-quality visuals using advanced AI rendering and image synthesis.'
  },
  {
    title: 'Creativity',
    image: 'images/collection/collection-img3.png',
    description: 'Push the boundaries of imagination with tools designed to unlock unique and artistic possibilities.'
  },
  {
    title: 'Flexible',
    image: 'images/collection/collection-img4.png',
    description: 'Fully customizable outputs that adapt to your style, needs, and evolving ideas with ease and flexibility.'
  }
];

plans = [
  {
    name: 'Individual Plan',
    target: 'Perfect for private individuals',
    price: '$ 8 /mo',
    features: [
      '100 Projects',
      'Download prototypes',
      'Graphic Images'
    ]
  },
  {
    name: 'Premium Plan',
    target: 'Perfect for private companies',
    price: '$ 19 /mo',
    features: [
      'Unlimited Projects',
      'Download prototypes',
      'Graphic Images'
    ]
  }
];

blogs = [
  {
    image: 'images/blogs/blog1.jpg',
    authorImage: 'images/blogs/profile.jpg',
    author: 'Lena Carter',
    title: 'The Top Benefits of AI for Marketers, State of AI Data',
    date: 'June 3, 2025',
    comments: 0,
    link: 'single-blog.html'
  },
  {
    image: 'images/blogs/blog2.jpg',
    authorImage: 'images/blogs/profile.jpg',
    author: 'Eli Navarro',
    title: 'AI Tools to Help You Grow Your AI Graphics Business',
    date: 'June 4, 2025',
    comments: 0,
    link: 'single-blog.html'
  },
  {
    image: 'images/blogs/blog3.jpg',
    authorImage: 'images/blogs/profile.jpg',
    author: 'Maya Chen',
    title: 'When Is the Best Time to Post on Instagram in 2025?',
    date: 'June 6, 2025',
    comments: 0,
    link: 'single-blog.html'
  }
];
}
