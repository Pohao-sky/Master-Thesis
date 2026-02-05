import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-system-interface',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './system-interface.component.html',
  styles: [`
    .content-block {
      margin-bottom: 3rem;
    }
    .img-container {
      margin: 1.5rem 0;
      text-align: center;
    }
    .img-container img {
      max-width: 100%;
      height: auto;
      border: 1px solid #e5e7eb;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      display: block;
      margin: 0 auto;
    }
    .img-caption {
      margin-top: 0.5rem;
      text-align: center;
      color: #6b7280;
      font-size: 0.875rem;
    }
    h2 {
      margin-bottom: 1rem;
      color: #111827;
      font-weight: 600;
    }
    p {
      margin-bottom: 1rem;
      line-height: 1.75;
      color: #374151;
    }
  `]
})
export class SystemInterfaceComponent {}
