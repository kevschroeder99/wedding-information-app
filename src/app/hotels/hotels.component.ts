import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent {
  hotels = [
    {
      name: 'Hotel Zum Zollhaus',
      address: 'Kleibroker Str. 139, 26180 Rastede',
      description: 'ca. 700m entfernt von der Location',
      price: '125-135€ pro Nacht inkl. Frühstück',
      booking: 'Bei der Buchung das Stichwort ... angeben (Für die Hochzeit ist ein Buchungskontigent hinterlegt.',
      phone: '123-456-7890',
      website: 'https://www.zumzollhaus.de/',
      picture: 'assets/images/zumzollhauszimmer.jpg'
    },
    {
      name: 'Campsite MPS Rastede',
      address: 'Hasenbült, 26180 Rastede',
      description: 'Campingplatz, ca. 500m entfernt von der Location',
      price: '(Abbildung entspricht nicht Realität)',
      picture: 'assets/images/camping.jpg'
      //phone: '987-654-3210',
      //website: 'https://hoteltwo.example.com'
    }
    // Add more hotels as needed
  ];
}
