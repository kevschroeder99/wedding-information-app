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
      name: '🏨 HotelHotel Zum Zollhaus',
      address: 'Kleibroker Str. 139, 26180 Rastede',
      description: 'ca. 700m entfernt von der Location',
      price: '125-135€ pro Nacht (inkl. Frühstück)',
      booking: 'Bei der Buchung das Stichwort ... angeben (Für die Hochzeit ist ein Buchungskontigent hinterlegt.',
      phone: '+49 (0) 4402-93810',
      website: 'https://www.zumzollhaus.de/',
      picture: 'assets/images/zumzollhauszimmer.jpg'
    },
    {
      name: '🏕️ Campingplatz - Campsite MPS Rastede',
      address: 'Hasenbült, 26180 Rastede',
      description: 'ca. 500m entfernt von der Location (Abbildung entspricht nicht der Realität)',
      price: 'Preis unbekannt',
      picture: 'assets/images/camping.jpg',
      website: 'https://g.co/kgs/e3Y2Yyi'
    }, 
    {
      name: '🏨 Schlosspark-Hotel Hof von Oldenburg',
      address: 'Oldenburger Straße 199, 26180 Rastede',
      description: 'ca. 3,5km entfernt von der Location',
      price: 'ca. 90€ pro Nacht',
      phone: '+49 (0) 4402-92790',
      website: 'https://www.schlosspark-hotel.de/?utm_source=google&utm_medium=wix_google_business_profile&utm_campaign=3054438562176288671',
      picture: 'assets/images/hotel_schlosspark_rastede.jpg'
    },
    {
      name: '🏨 B&B Hotel Oldenburg',
      address: 'Alexanderstraße 1-5 , 26121 Oldenburg',
      description: 'ca. 17km entfernt von der Location (15min Fahrt)',
      price: 'ca. 75€ pro Nacht',
      phone: '+49 (0) 441-92511-0',
      website: 'https://www.hotel-bb.com/de/hotel/oldenburg?arrival_date=01/04/2025&departure_date=01/05/2025&r1_ad=2&testClick=false&identifier=adquality-google&posid=webde&Gclic=B&wh_token=01ea012a-6dbd-43c4-90c9-0c8e2b65d7b2-189986-16875&utm_source=hotelfinder&utm_medium=metasearch&utm_campaign=de_conversion_ppa_paid_oldenburg',
      picture: 'assets/images/hotel_b_und_b.png'
    }
  ];
}
