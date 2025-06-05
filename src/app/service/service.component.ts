import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  prompt: string = '';
  imageUrl: string = '';
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  generateImage(event: Event) {
    event.preventDefault();
    if (!this.prompt.trim()) {
      alert('Please enter a prompt.');
      return;
    }

    this.loading = true;

    const payload = {
      prompt: this.prompt,
      n: 1,
      size: '512x512'
    };

    this.http.post<any>(
      'http://localhost:3000/api/generate-image', 
      payload
    ).subscribe({
      next: res => {
        this.imageUrl = res.data[0]?.url || '';
        this.loading = false;
      },
      error: err => {
        console.error('Image generation failed:', err);
        this.loading = false;
        alert('Failed to generate image. Try again.');
      }
    });
  }
}
