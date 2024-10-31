import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HotelModalComponent } from '../hotel-modal/hotel-modal.component';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule, HotelModalComponent],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent {
  hotels = [
    {
      name: 'Hotel Zum Zollhaus',
      address: 'Kleibroker Str. 139, 26180 Rastede',
      description: 'Infos: Hotel fußläufig zur Location',
      phone: '123-456-7890',
      website: 'https://www.zumzollhaus.de/'
    },
    {
      name: 'Campsite MPS Rastede',
      address: 'Hasenbült, 26180 Rastede',
      description: 'Infos: Campingplatz fußläufig zur Location'
      //phone: '987-654-3210',
      //website: 'https://hoteltwo.example.com'
    }
    // Add more hotels as needed
  ];

  selectedHotel: any = null;

  openModal(hotel: any) {
    this.selectedHotel = hotel;
  }

  closeModal() {
    this.selectedHotel = null;
  }
}
