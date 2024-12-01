import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Use CommonModule
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Keep BrowserAnimationsModule
import { FaqComponent } from '../faq/faq.component';
import { RsvpFormComponent } from '../rsvp-form/rsvp-form.component';
import { RouterModule } from '@angular/router';
import { IcsService, CalendarEvent } from '../services/ics.service';



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
  styleUrl: './home.component.css',
  providers: [
    IcsService
  ]
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
  constructor(private icsService: IcsService) {}

  downloadWeddingEvent() {
    const weddingEvent: CalendarEvent = {
      title: 'Hochzeit von Sinje & Kevin',
      description: 'Unsere Hochzeitsfeier - wir freuen uns auf diesen besonderen Tag!',
      location: 'Kleibroker Str. 200, 26180 Rastede',
      startTime: new Date('2025-08-23'), // Adjust time as needed
      endTime: new Date('2025-08-24')    // Adjust end time as needed
    };

    this.icsService.downloadIcsFile(weddingEvent, 'Sinje_Kevin_Hochzeit.ics');
  }
}
