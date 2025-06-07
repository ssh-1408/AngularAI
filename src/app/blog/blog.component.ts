import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{

  blogs = [
    {
      image: 'images/blogs/blog1.jpg',
      authorImage: 'images/blogs/profile.jpg',
      author: 'Lena Carter',
      title: 'The Top Benefits of AI for Marketers, State of AI Data',
      date: 'June 3, 2025',
      comments: 0
    },
    {
      image: 'images/blogs/blog2.jpg',
      authorImage: 'images/blogs/profile.jpg',
      author: 'Eli Navarro',
      title: 'AI Tools to Help You Grow Your AI Graphics Business',
      date: 'June 4, 2025',
      comments: 0
    },
    {
      image: 'images/blogs/blog3.jpg',
      authorImage: 'images/blogs/profile.jpg',
      author: 'Maya Chen',
      title: 'When Is the Best Time to Post on Instagram in 2025?',
      date: 'June 5, 2025',
      comments: 0
    },
    {
      image: 'images/blogs/blog4.jpg',
      authorImage: 'images/blogs/profile.jpg',
      author: 'Caroline Forsey',
      title: 'The Top Benefits of AI for Marketers, State of AI Data',
      date: 'June 6, 2025',
      comments: 0
    },
    {
      image: 'images/blogs/blog5.jpg',
      authorImage: 'images/blogs/profile.jpg',
      author: 'Noah Fischer',
      title: 'See what’s possible when machine learning meets human imagination.',
      date: 'June 10, 2025',
      comments: 0
    },
    {
      image: 'images/blogs/blog6.jpg',
      authorImage: 'images/blogs/profile.jpg',
      author: 'Sofia Ivanova',
      title: 'From concept to creation in seconds — powered by algorithms, driven by vision.',
      date: 'June 13, 2025',
      comments: 0
    }
  ];

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    AOS.init();
  }

}