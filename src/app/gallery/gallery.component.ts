import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})


export class GalleryComponent {
  imagePaths = [1, 2, 3, 4, 5, 6].map(num => `assets/images/${num}.jpg`);
}
