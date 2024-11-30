import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-rsvp-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './rsvp-form.component.html',
  styleUrl: './rsvp-form.component.css'
})
export class RsvpFormComponent {
  rsvpForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.rsvpForm = this.fb.group({
      rsvpStatus: ['', Validators.required],
      additionalGuests: ['0'],
      mealPreference: ['', Validators.required],
      allergens: ['']
    });
  }

  // Add this method back to the component
  onRsvpStatusChange() {
    const rsvpStatus = this.rsvpForm.get('rsvpStatus')?.value;
    
    if (rsvpStatus === 'not-accept') {
      this.rsvpForm.get('additionalGuests')?.disable();
      this.rsvpForm.get('mealPreference')?.disable();
      this.rsvpForm.get('allergens')?.disable();
    } else {
      this.rsvpForm.get('additionalGuests')?.enable();
      this.rsvpForm.get('mealPreference')?.enable();
      this.rsvpForm.get('allergens')?.enable();
    }
  }

  isFormDisabled(): boolean {
    return this.rsvpForm.get('rsvpStatus')?.value === 'not-accept';
  }

  // Update the method signature to accept the event
  onSubmit(event: Event) {
    //event.preventDefault(); // Prevent default form submission
    
    if (this.rsvpForm.valid) {
      console.log('Form submitted', this.rsvpForm.value);
      // Add your submission logic here
    }
  }
}
