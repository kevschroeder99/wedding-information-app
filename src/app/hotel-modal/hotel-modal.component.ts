import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotel-modal',
  standalone: true,
  templateUrl: './hotel-modal.component.html',
  styleUrls: ['./hotel-modal.component.css']
})
export class HotelModalComponent {
  @Input() hotel: any; // Hotel data passed from parent
  @Output() close = new EventEmitter<void>(); // Event to close the modal

  onClose() {
    this.close.emit(); // Emit close event when user clicks 'Close'
  }
}