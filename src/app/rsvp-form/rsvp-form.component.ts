import { Component } from '@angular/core';

@Component({
  selector: 'app-rsvp-form',
  standalone: true,
  imports: [],
  templateUrl: './rsvp-form.component.html',
  styleUrl: './rsvp-form.component.css'
})
export class RsvpFormComponent {
  constructor() {}

  // Optional: Add form handling if you want to do something before the form submits
  onSubmit(event: Event) {
    // The form will be handled by Netlify automatically
    // You can add additional client-side logic here if needed
    console.log('Form submitted');
  }
}
