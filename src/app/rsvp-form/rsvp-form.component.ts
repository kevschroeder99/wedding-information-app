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
      name: ['', Validators.required],
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

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent default form submission
  
    if (this.rsvpForm.valid) {
      const formData = new FormData();
      Object.keys(this.rsvpForm.value).forEach(key => {
        formData.append(key, this.rsvpForm.value[key]);
      });
  
      fetch("/", {
        method: "POST",
        body: formData,
      })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
    }
  }
}
