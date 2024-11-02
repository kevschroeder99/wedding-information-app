import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  weddingImages = [
    { src: 'assets/images/herzbild.jpg', caption: 'Moment 1' },
    { src: 'assets/images/torte.jpg', caption: 'Moment 2' }
  ];
}
