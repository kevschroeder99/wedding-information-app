import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Use CommonModule
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Keep BrowserAnimationsModule
import { FaqComponent } from '../faq/faq.component';
import { RsvpFormComponent } from '../rsvp-form/rsvp-form.component';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    FaqComponent,
    RsvpFormComponent,
    RouterModule
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  weddingImages = [
    { src: 'assets/images/herzbild.jpg', caption: 'Moment 1' },
    { src: 'assets/images/torte.jpg', caption: 'Moment 2' }
  ];
  faqs = [
    {
      title: 'Allgemeine Fragen',
      content: 'Wann und wo findet die Hochzeit statt?...'
    },
    {
      title: 'Anreise und Unterkunft',
      content: 'Gibt es Parkmöglichkeiten in der Nähe der Location?...'
    },
    // Add more FAQ objects as needed
  ];
}
