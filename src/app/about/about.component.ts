import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  team = [
    {
      image: 'images/team1.jpg',
      title: 'AI Developer',
      description: 'Designs and trains neural networks to bring creative concepts to life through automation and precision.'
    },
    {
      image: 'images/team2.jpg',
      title: 'Creative Director',
      description: 'Shapes the artistic vision and ensures each AI-generated image aligns with your brand and message.'
    },
    {
      image: 'images/team3.jpg',
      title: 'UI/UX Specialist',
      description: 'Crafts seamless interfaces for intuitive control over image generation tools and creative workflows.'
    },
    {
      image: 'images/team4.jpg',
      title: 'AI Visionary',
      description: 'Explores the future of creativity with bold ideas that bridge machine intelligence and human imagination.'
    }
  ];

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    AOS.init();
  }

}
